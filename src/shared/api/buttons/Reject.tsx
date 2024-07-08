import React from "react";
import { IconProps } from "./types";

const Reject = ({ height = 23, width = 79 }: IconProps) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 23 79"
        >
            <path
                d="M10.9588 16V7.27273H14.0696C14.7457 7.27273 15.3068 7.3892 15.7528 7.62216C16.2017 7.85511 16.5369 8.17756 16.7585 8.58949C16.9801 8.99858 17.0909 9.47159 17.0909 10.0085C17.0909 10.5426 16.9787 11.0128 16.7543 11.419C16.5327 11.8224 16.1974 12.1364 15.7486 12.3608C15.3026 12.5852 14.7415 12.6974 14.0653 12.6974H11.7088V11.5639H13.946C14.3722 11.5639 14.7188 11.5028 14.9858 11.3807C15.2557 11.2585 15.4531 11.081 15.5781 10.848C15.7031 10.6151 15.7656 10.3352 15.7656 10.0085C15.7656 9.67898 15.7017 9.39347 15.5739 9.15199C15.4489 8.91051 15.2514 8.72585 14.9815 8.59801C14.7145 8.46733 14.3636 8.40199 13.929 8.40199H12.2756V16H10.9588ZM15.267 12.0625L17.4233 16H15.9233L13.8097 12.0625H15.267ZM21.3299 16.1321C20.685 16.1321 20.1296 15.9943 19.6637 15.7188C19.2006 15.4403 18.8427 15.0497 18.5898 14.5469C18.3398 14.0412 18.2148 13.4489 18.2148 12.7699C18.2148 12.0994 18.3398 11.5085 18.5898 10.9972C18.8427 10.4858 19.195 10.0866 19.6467 9.79972C20.1012 9.51278 20.6325 9.36932 21.2404 9.36932C21.6097 9.36932 21.9677 9.4304 22.3143 9.55256C22.6609 9.67472 22.9719 9.86648 23.2475 10.1278C23.5231 10.3892 23.7404 10.7287 23.8995 11.1463C24.0586 11.5611 24.1381 12.0653 24.1381 12.6591V13.1108H18.935V12.1562H22.8896C22.8896 11.821 22.8214 11.5241 22.685 11.2656C22.5487 11.0043 22.3569 10.7983 22.1097 10.6477C21.8654 10.4972 21.5785 10.4219 21.2489 10.4219C20.891 10.4219 20.5785 10.5099 20.3114 10.6861C20.0472 10.8594 19.8427 11.0866 19.6978 11.3679C19.5558 11.6463 19.4847 11.9489 19.4847 12.2756V13.0213C19.4847 13.4588 19.5614 13.831 19.7148 14.1378C19.8711 14.4446 20.0884 14.679 20.3668 14.8409C20.6452 15 20.9705 15.0795 21.3427 15.0795C21.5842 15.0795 21.8043 15.0455 22.0032 14.9773C22.2021 14.9062 22.3739 14.8011 22.5188 14.6619C22.6637 14.5227 22.7745 14.3509 22.8512 14.1463L24.0572 14.3636C23.9606 14.7187 23.7873 15.0298 23.5373 15.2969C23.2901 15.5611 22.979 15.767 22.604 15.9148C22.2319 16.0597 21.8072 16.1321 21.3299 16.1321ZM25.5518 9.45455H26.826V16.4261C26.826 16.8636 26.7464 17.233 26.5874 17.5341C26.4311 17.8352 26.1982 18.0639 25.8885 18.2202C25.5817 18.3764 25.2024 18.4545 24.7507 18.4545C24.7053 18.4545 24.6626 18.4545 24.6229 18.4545C24.5803 18.4545 24.5362 18.4531 24.4908 18.4503V17.3551C24.5305 17.3551 24.5661 17.3551 24.5973 17.3551C24.6257 17.3551 24.6584 17.3551 24.6953 17.3551C24.9964 17.3551 25.2138 17.2741 25.3473 17.1122C25.4837 16.9531 25.5518 16.7216 25.5518 16.4176V9.45455ZM26.1825 8.4446C25.9609 8.4446 25.7706 8.37074 25.6115 8.22301C25.4553 8.07244 25.3771 7.89347 25.3771 7.68608C25.3771 7.47585 25.4553 7.29687 25.6115 7.14915C25.7706 6.99858 25.9609 6.9233 26.1825 6.9233C26.4041 6.9233 26.593 6.99858 26.7493 7.14915C26.9084 7.29687 26.9879 7.47585 26.9879 7.68608C26.9879 7.89347 26.9084 8.07244 26.7493 8.22301C26.593 8.37074 26.4041 8.4446 26.1825 8.4446ZM31.3612 16.1321C30.7163 16.1321 30.1609 15.9943 29.695 15.7188C29.2319 15.4403 28.8739 15.0497 28.6211 14.5469C28.3711 14.0412 28.2461 13.4489 28.2461 12.7699C28.2461 12.0994 28.3711 11.5085 28.6211 10.9972C28.8739 10.4858 29.2262 10.0866 29.6779 9.79972C30.1325 9.51278 30.6637 9.36932 31.2717 9.36932C31.641 9.36932 31.9989 9.4304 32.3455 9.55256C32.6921 9.67472 33.0032 9.86648 33.2788 10.1278C33.5543 10.3892 33.7717 10.7287 33.9308 11.1463C34.0898 11.5611 34.1694 12.0653 34.1694 12.6591V13.1108H28.9663V12.1562H32.9208C32.9208 11.821 32.8526 11.5241 32.7163 11.2656C32.5799 11.0043 32.3881 10.7983 32.141 10.6477C31.8967 10.4972 31.6097 10.4219 31.2802 10.4219C30.9222 10.4219 30.6097 10.5099 30.3427 10.6861C30.0785 10.8594 29.8739 11.0866 29.729 11.3679C29.587 11.6463 29.516 11.9489 29.516 12.2756V13.0213C29.516 13.4588 29.5927 13.831 29.7461 14.1378C29.9023 14.4446 30.1197 14.679 30.3981 14.8409C30.6765 15 31.0018 15.0795 31.3739 15.0795C31.6154 15.0795 31.8356 15.0455 32.0344 14.9773C32.2333 14.9062 32.4052 14.8011 32.5501 14.6619C32.695 14.5227 32.8058 14.3509 32.8825 14.1463L34.0884 14.3636C33.9918 14.7187 33.8185 15.0298 33.5685 15.2969C33.3214 15.5611 33.0103 15.767 32.6353 15.9148C32.2631 16.0597 31.8384 16.1321 31.3612 16.1321ZM38.3402 16.1321C37.7067 16.1321 37.1612 15.9886 36.7038 15.7017C36.2493 15.4119 35.8999 15.0128 35.6555 14.5043C35.4112 13.9957 35.2891 13.4134 35.2891 12.7571C35.2891 12.0923 35.4141 11.5057 35.6641 10.9972C35.9141 10.4858 36.2663 10.0866 36.7209 9.79972C37.1754 9.51278 37.7109 9.36932 38.3274 9.36932C38.8246 9.36932 39.2678 9.46165 39.657 9.64631C40.0462 9.82812 40.3601 10.0838 40.5987 10.4134C40.8402 10.7429 40.9837 11.1278 41.0291 11.5682H39.7891C39.7209 11.2614 39.5646 10.9972 39.3203 10.7756C39.0788 10.554 38.755 10.4432 38.3487 10.4432C37.9936 10.4432 37.6825 10.5369 37.4155 10.7244C37.1513 10.9091 36.9453 11.1733 36.7976 11.517C36.6499 11.858 36.576 12.2614 36.576 12.7273C36.576 13.2045 36.6484 13.6165 36.7933 13.9631C36.9382 14.3097 37.1428 14.5781 37.407 14.7685C37.674 14.9588 37.9879 15.054 38.3487 15.054C38.5902 15.054 38.8089 15.0099 39.005 14.9219C39.2038 14.831 39.37 14.7017 39.5036 14.5341C39.6399 14.3665 39.7351 14.1648 39.7891 13.929H41.0291C40.9837 14.3523 40.8459 14.7301 40.6158 15.0625C40.3857 15.3949 40.0774 15.6562 39.6911 15.8466C39.3075 16.0369 38.8572 16.1321 38.3402 16.1321ZM45.4471 9.45455V10.4773H41.8718V9.45455H45.4471ZM42.8306 7.88636H44.1048V14.0781C44.1048 14.3253 44.1417 14.5114 44.2156 14.6364C44.2894 14.7585 44.3846 14.8423 44.5011 14.8878C44.6204 14.9304 44.7496 14.9517 44.8888 14.9517C44.9911 14.9517 45.0806 14.9446 45.1573 14.9304C45.234 14.9162 45.2937 14.9048 45.3363 14.8963L45.5664 15.9489C45.4925 15.9773 45.3874 16.0057 45.2511 16.0341C45.1147 16.0653 44.9442 16.0824 44.7397 16.0852C44.4045 16.0909 44.092 16.0312 43.8022 15.9062C43.5124 15.7812 43.2781 15.5881 43.0991 15.3267C42.9201 15.0653 42.8306 14.7372 42.8306 14.3423V7.88636Z"
                fill="#F55858"/>
            <path
                d="M63.3425 13.15C63.3425 13.349 63.2635 13.5397 63.1229 13.6804C62.9822 13.821 62.7914 13.9 62.5925 13.9C62.3936 13.9 62.2029 13.821 62.0622 13.6804C61.9216 13.5397 61.8425 13.349 61.8425 13.15V8.65005C61.8425 8.45114 61.9216 8.26037 62.0622 8.11972C62.2029 7.97907 62.3936 7.90005 62.5925 7.90005C62.7914 7.90005 62.9822 7.97907 63.1229 8.11972C63.2635 8.26037 63.3425 8.45114 63.3425 8.65005V13.15ZM57.3425 15.7V16.48C57.3425 16.6408 57.2585 16.7956 57.1055 16.8442C56.9257 16.9013 56.7349 16.9152 56.5486 16.8847C56.3624 16.8542 56.186 16.7802 56.0337 16.6687C55.8814 16.5573 55.7576 16.4115 55.6723 16.2431C55.5869 16.0748 55.5425 15.8888 55.5425 15.7C55.5425 15.103 55.6517 14.5312 55.8509 14.0044C55.9733 13.6804 55.7513 13.3 55.4045 13.3H53.8925C53.1467 13.3 52.5359 12.694 52.6049 11.9518C52.7207 10.7038 52.9955 9.50265 53.4095 8.36745C53.6507 7.70685 54.2993 7.30005 55.0025 7.30005H56.9177C57.1971 7.30016 57.4725 7.36528 57.7223 7.49025L59.3627 8.30985C59.6125 8.43482 59.888 8.49994 60.1673 8.50005H60.9425V12.7H60.3647C59.9537 12.7 59.6099 12.9892 59.3975 13.3408C59.1015 13.8303 58.6408 14.1983 58.0979 14.3788C57.8387 14.4646 57.5861 14.6104 57.4913 14.8672C57.3953 15.1264 57.3425 15.4072 57.3425 15.7Z"
                fill="#F55858"/>
        </svg>
    );
};

export default Reject;