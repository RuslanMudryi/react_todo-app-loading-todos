import { useEffect, useState } from 'react';

type Props = {
  error: string;
};

export const ErrorNotification: React.FC<Props> = ({ error }) => {
  const [className, setClassName] = useState<string>(
    'notification is-danger is-light has-text-weight-normal hidden',
  );

  useEffect(() => {
    if (error.length !== 0) {
      setClassName('notification is-danger is-light has-text-weight-normal');
      setTimeout(() => {
        setClassName(
          'notification is-danger is-light has-text-weight-normal hidden',
        );
      }, 3000);
    }
  }, [error]);

  return (
    <div
      data-cy="ErrorNotification"
      // eslint-disable-next-line max-len
      className={className}
    >
      <button data-cy="HideErrorButton" type="button" className="delete" />
      {/* show only one message at a time */}
      {error}
    </div>
  );
};
