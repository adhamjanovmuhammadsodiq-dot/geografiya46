import React from 'react';

interface ProgressBarProps {
  value: number; // 0 to 100
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'amber';
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  size = 'md',
  color = 'blue',
  showLabel = false,
  label,
  className = ''
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  }[size];

  const colorClasses = {
    blue: 'bg-blue-600 dark:bg-blue-500',
    green: 'bg-emerald-600 dark:bg-emerald-500',
    amber: 'bg-amber-500 dark:bg-amber-400'
  }[color];

  return (
    <div className={`w-full ${className}`}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center text-xs font-semibold mb-1.5 text-slate-700 dark:text-slate-300">
          <span>{label || 'Progress:'}</span>
          <span className="font-mono">{clampedValue}%</span>
        </div>
      )}
      <div
        className={`w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden ${heightClasses}`}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`${heightClasses} ${colorClasses} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};
