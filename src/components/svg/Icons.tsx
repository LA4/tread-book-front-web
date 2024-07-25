import React from "react";

type props = {
  name: string;
  className?: string;
};
type UseSvg = {
  arrowDonw: string;
  arrowUp: string;
  home: string;
  add: string;
  book: string;
  cross: string;
  eyeOpen: string;
  eyeClose: string;
};

export default function Icons({ name, ...props }: props) {
  const useSvg: UseSvg = {
    arrowDonw: "arrowDown",
    arrowUp: "arrowUp",
    home: "home",
    add: "add",
    book: "book",
    cross: "cross",
    eyeOpen: "eyeOpen",
    eyeClose: "eyeClose",
  };
  return (
    <span {...props}>
      {name === useSvg.arrowDonw && (
        <svg
          width="29"
          height="18"
          viewBox="0 0 29 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 1.5C3.67157 0.671575 2.32843 0.671575 1.5 1.5C0.671573 2.32843 0.671572 3.67157 1.5 4.5L11.3137 14.3137C12.8758 15.8758 15.4085 15.8758 16.9706 14.3137L26.7843 4.5C27.6127 3.67157 27.6127 2.32843 26.7843 1.5C25.9558 0.671573 24.6127 0.671573 23.7843 1.5L16.9706 8.31371C15.4085 9.87581 12.8758 9.87581 11.3137 8.31371L4.5 1.5Z"
            fill="#E0E0D1"
          />
        </svg>
      )}
      {name === useSvg.arrowUp && (
        <svg
          width="29"
          height="18"
          viewBox="0 0 29 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7843 15.6421C24.6127 16.4706 25.9558 16.4706 26.7843 15.6421C27.6127 14.8137 27.6127 13.4706 26.7843 12.6422L16.9706 2.82844C15.4085 1.26634 12.8758 1.26634 11.3137 2.82844L1.5 12.6421C0.671572 13.4706 0.671574 14.8137 1.5 15.6421C2.32843 16.4706 3.67157 16.4706 4.5 15.6421L11.3137 8.82844C12.8758 7.26634 15.4085 7.26634 16.9706 8.82844L23.7843 15.6421Z"
            fill="#E0E0D1"
          />
        </svg>
      )}
      {name === useSvg.home && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4_68)">
            <path
              d="M23.9917 11.9766C23.9917 12.8203 23.3667 13.4813 22.6583 13.4813H21.325L21.3542 20.9906C21.3542 21.1172 21.3458 21.2437 21.3333 21.3703V22.125C21.3333 23.1609 20.5875 24 19.6667 24H19C18.9542 24 18.9083 24 18.8625 23.9953C18.8042 24 18.7458 24 18.6875 24H17.3333H16.3333C15.4125 24 14.6667 23.1609 14.6667 22.125V21V18C14.6667 17.1703 14.0708 16.5 13.3333 16.5H10.6667C9.92916 16.5 9.33333 17.1703 9.33333 18V21V22.125C9.33333 23.1609 8.5875 24 7.66667 24H6.66667H5.3375C5.275 24 5.2125 23.9953 5.15 23.9906C5.1 23.9953 5.05 24 5 24H4.33333C3.4125 24 2.66667 23.1609 2.66667 22.125V16.875C2.66667 16.8328 2.66667 16.7859 2.67083 16.7438V13.4813H1.33333C0.583333 13.4813 0 12.825 0 11.9766C0 11.5547 0.125 11.1797 0.416667 10.8516L11.1 0.375C11.3917 0.046875 11.725 0 12.0167 0C12.3083 0 12.6417 0.09375 12.8917 0.328125L23.5333 10.8516C23.8667 11.1797 24.0333 11.5547 23.9917 11.9766Z"
              fill="#58594D"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_68">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {name === useSvg.add && (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.743225" width="24" height="24" rx="12" fill="#58594D" />
          <path
            d="M10.7547 6.30857C10.7547 5.85412 11.1231 5.48572 11.5775 5.48572H13.2232C13.6777 5.48572 14.0461 5.85412 14.0461 6.30857V17.0057C14.0461 17.4602 13.6777 17.8286 13.2232 17.8286H11.5775C11.1231 17.8286 10.7547 17.4602 10.7547 17.0057V6.30857Z"
            fill="#E0E0D1"
          />
          <path
            d="M17.7489 10.0114C18.2034 10.0114 18.5718 10.3798 18.5718 10.8343V12.48C18.5718 12.9345 18.2034 13.3029 17.7489 13.3029L7.0518 13.3029C6.59735 13.3029 6.22894 12.9345 6.22894 12.48L6.22894 10.8343C6.22894 10.3798 6.59735 10.0114 7.0518 10.0114L17.7489 10.0114Z"
            fill="#E0E0D1"
          />
        </svg>
      )}
      {name === useSvg.book && (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4_70)">
            <path
              d="M5.9918 0C3.15251 0 0.848938 2.01562 0.848938 4.5V19.5C0.848938 21.9844 3.15251 24 5.9918 24H21.4204H23.1347C24.0829 24 24.8489 23.3297 24.8489 22.5C24.8489 21.6703 24.0829 21 23.1347 21V18C24.0829 18 24.8489 17.3297 24.8489 16.5V1.5C24.8489 0.670312 24.0829 0 23.1347 0H21.4204H5.9918ZM5.9918 18H19.7061V21H5.9918C5.04358 21 4.27751 20.3297 4.27751 19.5C4.27751 18.6703 5.04358 18 5.9918 18ZM7.70608 6.75C7.70608 6.3375 8.09179 6 8.56322 6H18.8489C19.3204 6 19.7061 6.3375 19.7061 6.75C19.7061 7.1625 19.3204 7.5 18.8489 7.5H8.56322C8.09179 7.5 7.70608 7.1625 7.70608 6.75ZM8.56322 9H18.8489C19.3204 9 19.7061 9.3375 19.7061 9.75C19.7061 10.1625 19.3204 10.5 18.8489 10.5H8.56322C8.09179 10.5 7.70608 10.1625 7.70608 9.75C7.70608 9.3375 8.09179 9 8.56322 9Z"
              fill="#58594D"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_70">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.848938)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {name === useSvg.cross && (
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24.6338"
            y="0.766418"
            width="35"
            height="35"
            rx="17.5"
            transform="rotate(42.9943 24.6338 0.766418)"
            fill="#58594D"
          />
          <path
            d="M29.0388 17.4516C29.4908 16.9669 30.2501 16.9403 30.7348 17.3922L32.4903 19.0288C32.975 19.4808 33.0016 20.2401 32.5497 20.7248L21.9116 32.135C21.4597 32.6198 20.7003 32.6464 20.2156 32.1944L18.4602 30.5578C17.9754 30.1059 17.9489 29.3465 18.4008 28.8618L29.0388 17.4516Z"
            fill="#E0E0D1"
          />
          <path
            d="M32.8169 28.3569C33.3017 28.8089 33.3283 29.5682 32.8763 30.0529L31.2397 31.8083C30.7878 32.2931 30.0284 32.3197 29.5437 31.8677L18.1335 21.2297C17.6488 20.7778 17.6222 20.0184 18.0741 19.5337L19.7107 17.7783C20.1627 17.2935 20.922 17.2669 21.4068 17.7189L32.8169 28.3569Z"
            fill="#E0E0D1"
          />
        </svg>
      )}
      {name === useSvg.eyeOpen && (
        <svg
          width="38"
          height="28"
          viewBox="0 0 38 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.38006 14.0877C9.33739 0.100959 29.1627 0.100959 35.12 14.0877C35.4446 14.8499 36.3256 15.2046 37.0878 14.88C37.85 14.5554 38.2047 13.6743 37.8801 12.9122C30.8866 -3.50718 7.6134 -3.50718 0.619984 12.9122C0.295355 13.6743 0.650054 14.5554 1.41223 14.88C2.1744 15.2046 3.05543 14.8499 3.38006 14.0877ZM35.4391 17.9389C26.6361 26.742 12.3635 26.742 3.56044 17.9389C2.97465 17.3531 2.0249 17.3531 1.43911 17.9389C0.85333 18.5247 0.85333 19.4744 1.43911 20.0602C11.4137 30.0349 27.5858 30.0349 37.5604 20.0602C38.1462 19.4745 38.1462 18.5247 37.5604 17.9389C36.9747 17.3531 36.0249 17.3531 35.4391 17.9389ZM19.4998 19.9996C22.8135 19.9996 25.4998 17.3133 25.4998 13.9996C25.4998 10.6859 22.8135 7.99957 19.4998 7.99957C16.1861 7.99957 13.4998 10.6859 13.4998 13.9996C13.4998 17.3133 16.1861 19.9996 19.4998 19.9996Z"
            fill="#132015"
          />
        </svg>
      )}
      {name === useSvg.eyeClose && (
        <svg
          width="39"
          height="13"
          viewBox="0 0 39 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.8648 3.41786C23.6857 3.49326 24.5046 3.59631 25.3202 3.727C23.6249 5.71828 22.5183 8.16778 22.1607 10.7979C22.0491 11.6188 22.6241 12.3747 23.445 12.4863C24.2659 12.5979 25.0218 12.023 25.1334 11.2021C25.4907 8.5739 26.8042 6.17635 28.8125 4.46219C31.3846 5.13563 33.9008 6.09287 36.3139 7.33391C37.0506 7.71279 37.955 7.42271 38.3339 6.686C38.7128 5.94929 38.4227 5.04492 37.686 4.66604C26.2724 -1.20378 12.7275 -1.20378 1.31393 4.66604C0.57722 5.04492 0.287141 5.94929 0.66602 6.686C1.0449 7.42271 1.94926 7.71279 2.68597 7.33391C3.39968 6.96686 4.12239 6.62464 4.8529 6.30724C4.25773 7.19995 3.72974 8.1386 3.27446 9.1157C2.92458 9.86661 3.24968 10.759 4.00059 11.1089C4.7515 11.4588 5.64388 11.1337 5.99376 10.3827C7.01902 8.18238 8.47372 6.20913 10.2724 4.57893C10.3353 4.52187 10.3923 4.46069 10.4433 4.39617C11.0877 4.2324 11.7355 4.08639 12.386 3.95814C11.2171 5.69274 10.4477 7.68716 10.1607 9.79792C10.0491 10.6188 10.6241 11.3747 11.445 11.4863C12.2659 11.5979 13.0218 11.023 13.1334 10.2021C13.4984 7.51743 14.8611 5.07342 16.943 3.35263C17.5886 3.30765 18.2352 3.27973 18.882 3.26886C17.434 5.15532 16.4865 7.40165 16.1607 9.79792C16.0491 10.6188 16.6241 11.3747 17.445 11.4863C18.2659 11.5979 19.0218 11.023 19.1334 10.2021C19.4938 7.55117 20.827 5.1349 22.8648 3.41786Z"
            fill="#132015"
          />
        </svg>
      )}
    </span>
  );
}
