"use client";

import React, { useState } from "react";
import Link from "next/link";
import { eligibilityQuestions, evaluateQuiz, QuizResult } from "@/content/eligibility";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles, MessageCircle, Calendar } from "lucide-react";

export default function EligibilityQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [totalScore, setTotalScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  // Filter questions based on conditional criteria (e.g. jobOffer only for work purpose)
  const activeQuestions = eligibilityQuestions.filter((q) => {
    if (!q.conditionalOn) return true;
    const parentVal = answers[q.conditionalOn.field];
    return q.conditionalOn.values.includes(parentVal);
  });

  const question = activeQuestions[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / (activeQuestions.length + 1)) * 100);

  const handleSelect = (optionValue: string, optionScore: number) => {
    const updatedAnswers = { ...answers, [question.id]: optionValue };
    setAnswers(updatedAnswers);
    setTotalScore((prev) => prev + optionScore);

    if (currentStep < activeQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate outcome
      const outcome = evaluateQuiz(updatedAnswers, totalScore + optionScore);
      setResult(outcome);
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setTotalScore(0);
    setIsCompleted(false);
    setResult(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-mono text-mist mb-2">
          <span>Profile Audit Progress</span>
          <span>{isCompleted ? "100%" : `${progressPercent}%`}</span>
        </div>
        <div className="w-full h-2 rounded-full bg-horizon/40 overflow-hidden border border-champagne/10">
          <div
            className="h-full bg-gradient-to-r from-champagne to-coral transition-all duration-300"
            style={{ width: `${isCompleted ? 100 : progressPercent}%` }}
          />
        </div>
      </div>

      {!isCompleted && question ? (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Question Header */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-champagne">
              Question {currentStep + 1} of {activeQuestions.length}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-cloud font-light">
              {question.title}
            </h2>
            <p className="text-mist text-sm sm:text-base">
              {question.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {question.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value, opt.score)}
                className="w-full p-5 rounded-2xl glass-card hover:bg-horizon/50 border border-champagne/15 hover:border-champagne/40 text-left transition-all duration-200 group flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-champagne/50"
              >
                <span className="text-sm sm:text-base font-medium text-cloud group-hover:text-champagne transition-colors">
                  {opt.label}
                </span>
                <div className="w-8 h-8 rounded-full border border-champagne/20 flex items-center justify-center text-mist group-hover:border-champagne group-hover:text-champagne transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>

          {/* Back Navigation */}
          {currentStep > 0 && (
            <div className="pt-4">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-xs font-mono text-mist hover:text-cloud transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back to Previous Question</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Result Screen */
        result && (
          <div className="p-8 sm:p-12 rounded-3xl glass-card border border-champagne/30 space-y-8 animate-in fade-in zoom-in-95 duration-400">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-champagne/15 pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-mist font-mono">
                  Indicative Assessment Result
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-light text-cloud mt-1">
                  {result.headline}
                </h3>
              </div>
              <div
                className="px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider self-start sm:self-auto"
                style={{ backgroundColor: `${result.badgeColor}20`, color: result.badgeColor, border: `1px solid ${result.badgeColor}60` }}
              >
                {result.label}
              </div>
            </div>

            <p className="text-mist text-base sm:text-lg leading-relaxed">
              {result.summary}
            </p>

            {/* Recommended Next Steps */}
            <div className="space-y-4 bg-midnight/60 p-6 rounded-2xl border border-champagne/10">
              <h4 className="font-semibold text-cloud text-sm font-mono tracking-wide uppercase">
                Recommended Action Plan
              </h4>
              <ul className="space-y-3">
                {result.nextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-mist">
                    <CheckCircle className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={buildWhatsAppLink({
                  type: "quiz",
                  quizSummary: {
                    purpose: answers.purpose,
                    destination: answers.destination,
                    qualification: answers.qualification,
                    experience: answers.experience,
                    timeline: answers.ageBand,
                  },
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 px-6 rounded-full bg-coral hover:bg-coral/90 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Get a Quote with Quiz Summary</span>
              </a>

              <Link
                href="/book"
                className="flex-1 py-4 px-6 rounded-full bg-horizon/50 hover:bg-horizon/80 border border-champagne/30 text-cloud font-semibold text-center flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Calendar className="w-5 h-5 text-champagne" />
                <span>Book 20-Min Strategy Call</span>
              </Link>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-champagne/10 text-xs text-mist/70">
              <p>Indicative guidance only. Final eligibility is decided by the embassy.</p>
              <button
                onClick={handleRestart}
                className="text-champagne hover:underline font-mono"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
