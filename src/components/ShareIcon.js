import React from "react";

const ShareIcon = ({ className, modern = false }) => {
  if (modern) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 566 670"
        className={className}
      >
        <g>
          <path d="M254.88 11.87c4.27-4.3 9.89-7.71 16.15-7.55 6.31-.38 12.1 2.92 16.43 7.26 31.09 29.88 62.07 59.88 93.14 89.79 3.34 3.16 6.65 6.67 8.06 11.16 2.08 6.74.58 14.65-4.34 19.81-7.17 7.72-20.37 8.54-28.54 1.94-2.54-2.12-4.68-4.66-6.96-7.05-18.81-20.02-37.55-40.11-56.46-60.03.55 17.91 1.83 35.81 1.63 53.74-.02 92.02.03 184.05-.03 276.07.34 11.83-10.23 22.49-22.04 22.35-12.16.66-23.5-10.13-23.22-22.36-.07-95.67-.01-191.35-.03-287.02.39-14.27 1.13-28.52 1.62-42.79-20.3 21.41-40.41 43.01-60.64 64.48-5.05 5.67-13.14 8.12-20.54 6.6a19.1 19.1 0 0 1-15.82-17.17c-1.15-6.74 2.01-13.39 6.89-17.89 31.55-30.46 63.1-60.93 94.7-91.34z" />
          <path d="M42.75 206.75c16.3-16.79 40.62-22.27 63.27-22.65 27.58-.23 55.17-.06 82.76-.08.03 15.28.04 30.56 0 45.84-26.26.1-52.52-.1-78.77.1-12 .13-24.97 3.47-32.95 13.03-7.83 9.01-9.65 21.41-9.76 32.95v260.05c.03 12.87-.79 26.56 5.45 38.29 5.6 11.36 17.95 17.77 30.2 18.93 4.68.41 9.37.66 14.07.57h301.95c13.6.08 28.51.64 40.18-7.54 11.16-7.5 15.81-21.41 16.03-34.34.41-14.96.06-29.93.18-44.9V276.03c-.08-11.45-1.96-23.75-9.71-32.7-8.11-9.87-21.44-13.3-33.74-13.39-26.01-.15-52.02 0-78.03-.08-.04-15.28-.04-30.57 0-45.85 25.04-.03 50.09 0 75.13-.02 12.5-.08 25.13.75 37.25 3.97 16.06 4.12 31.23 13.28 40.54 27.23 11.33 16.56 14.39 37.19 14.43 56.86.01 93.31.02 186.62-.01 279.93-.06 20.08-3.37 41.22-15.39 57.85-10.4 14.75-27.35 23.59-44.76 27.08-11.17 2.4-22.63 2.8-34.02 2.75-106.04-.02-212.07.01-318.11-.02-19.42-.22-39.71-3.35-56.14-14.38-13.33-8.77-22.53-22.87-26.84-38.09-3.69-12.35-4.57-25.31-4.55-38.13.05-93.02-.05-186.03.05-279.05.12-22.47 5.06-46.64 21.29-63.24z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,120,168.86000061035156"
      className={className}
    >
      <g fill="currentColor">
        <path d="M60.17 0h.02c9.34 9.43 18.62 18.91 27.9 28.39l-2.08 2.07a585.84 585.84 0 0 0-3.56 3.49c-6.09-6.29-12.26-12.5-18.35-18.79l.08 4.25c.13 28.57.11 57.14.01 85.7-2.69-.02-5.38-.01-8.06.02-.17-28.53-.16-57.07-.01-85.6l.16-4.35c-6.15 6.23-12.27 12.5-18.39 18.77l-3.56-3.51-2.08-2.05C41.56 18.93 50.8 9.4 60.17 0z" />
        <path d="M0 49.29h44.09c.08 2.63.15 5.26.1 7.89-12.09 0-24.19-.02-36.28 0l.05 4.14c.1 33.22.01 66.43.04 99.65h103.99c.04-33.22-.05-66.43.05-99.64l.05-4.15c-12.09-.02-24.19 0-36.28 0-.05-2.63.02-5.26.1-7.88 14.7-.02 29.39-.01 44.09-.01v119.57H0V49.29z" />
      </g>
    </svg>
  );
};

//#007aff

export default ShareIcon;