import { forwardRef } from "react";
import type { ReactNode, SVGProps } from "react";

type BaseProps = Omit<SVGProps<SVGSVGElement>, "role" | "viewBox" | "xmlns"> & { size?: number };

const Base = forwardRef<SVGSVGElement, BaseProps>(({ d, size = 16, width = size, height = size, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    width={width}
    height={height}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  />
));

type IconProps = Omit<BaseProps, "children">;

const create = (children: ReactNode) =>
  forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Base ref={ref} {...props}>
      {children}
    </Base>
  ));

export const IconArrowRight = create(
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>
);

export const IconExternalLink = create(
  <>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </>
);

export const IconImage = create(
  <>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </>
);

export const IconWww = create(
  <>
<path d="M3.338 17A9.996 9.996 0 0 0 12 22a9.996 9.996 0 0 0 8.662-5M3.338 7A9.996 9.996 0 0 1 12 2a9.996 9.996 0 0 1 8.662 5"></path><path d="M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5l1.5-5l1.5 5l1.5-5M1 10l1.5 5L4 10l1.5 5L7 10m10 0l1.5 5l1.5-5l1.5 5l1.5-5"></path>  </>
);

export const IconNode = create(
  <>
  <path d=  "M7.926 10.898L15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
  </>
);

  export const IconServer = create(
    <>
<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M3 12h18M3 12v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4M6 9h.01M6 15h.01M9 9h.01M9 15h.01"></path>
  </>
    );



