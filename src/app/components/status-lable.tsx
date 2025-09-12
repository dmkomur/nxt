import React from 'react';
import clsx from 'clsx';

export enum Status {
  ACTIVE = 'active',
  NOTACTIVE = 'notActive',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
}
interface StatusLableProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export const StatusLable = ({
  children,
  status,
  disabled,
}: StatusLableProps) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium transition-shadow hover:shadow-md',
        status === Status.ACTIVE &&
          'text-green-700 bg-green-100 hover:bg-green-200',
        status === Status.NOTACTIVE &&
          'text-red-700 bg-red-100 hover:bg-red-200',
        status === Status.PENDING &&
          'text-orange-700 bg-orange-100 hover:bg-orange-200',
        status === Status.SUSPENDED &&
          'text-blue-700 bg-blue-100 hover:bg-blue-200',
        { ['opacity-75']: disabled },
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </span>
  );
};
