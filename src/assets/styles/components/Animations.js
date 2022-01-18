import { keyframes } from "styled-components";

export const ChangeAnimation = keyframes`
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
`;

export const OpacityAnimation = keyframes`
0%, 100% {opacity:0;}
50% {opacity:1;}`;

export const SlideInUp = keyframes`
from {
  transform: translateY(100%);
  opacity: 0;
}
to {
  opacity: 1;
  transform: translateY(0%);
}
`;

export const FadeIn = keyframes`
from {

  opacity: 0;
}
to {
  opacity: 1;

}
`;
