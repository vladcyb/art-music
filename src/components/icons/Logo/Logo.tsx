import { IIcon } from '../IIcon';


export const Logo = ({ width, height, className }: IIcon) => (
  <svg className={className} width={width} height={height} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M25.599 496.5C25.4332 501.646 25.3496 506.813 25.3496 512C25.3496 772.955 236.895 984.5 497.85 984.5C758.805 984.5 970.35 772.955 970.35 512C970.35 506.813 970.266 501.646 970.101 496.5H25.599Z"
      fill="#383838" />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M25.3496 512C25.3496 251.046 236.895 39.5 497.85 39.5C758.804 39.5 970.35 251.046 970.35 512C970.35 772.955 758.805 984.5 497.85 984.5C236.895 984.5 25.3496 772.955 25.3496 512ZM497.85 54.5C245.18 54.5 40.3496 259.33 40.3496 512C40.3496 764.67 245.18 969.5 497.85 969.5C750.519 969.5 955.35 764.67 955.35 512C955.35 259.33 750.519 54.5 497.85 54.5Z"
      fill="#383838" />
    <path d="M373.39 737.5L333.44 631.08H332.76C333.1 634.593 333.383 639.353 333.61 645.36C333.836 651.253 333.95 657.43 333.95 663.89V737.5H319.84V616.12H342.45L379.85 715.57H380.53L418.61 616.12H441.05V737.5H425.92V662.87C425.92 656.976 426.033 651.14 426.26 645.36C426.6 639.58 426.883 634.876 427.11 631.25H426.43L385.97 737.5H373.39ZM566.378 694.66C566.378 703.046 564.678 710.64 561.278 717.44C557.878 724.126 552.665 729.453 545.638 733.42C538.725 737.273 529.885 739.2 519.118 739.2C504.045 739.2 492.541 735.12 484.608 726.96C476.788 718.686 472.878 707.806 472.878 694.32V616.12H488.178V694.83C488.178 704.69 490.785 712.34 495.998 717.78C501.325 723.22 509.315 725.94 519.968 725.94C530.961 725.94 538.895 723.05 543.768 717.27C548.755 711.376 551.248 703.84 551.248 694.66V616.12H566.378V694.66ZM667.264 705.03C667.264 715.796 663.354 724.183 655.534 730.19C647.714 736.196 637.174 739.2 623.914 739.2C617.114 739.2 610.824 738.69 605.044 737.67C599.264 736.65 594.447 735.233 590.594 733.42V718.8C594.674 720.613 599.717 722.256 605.724 723.73C611.844 725.203 618.134 725.94 624.594 725.94C633.66 725.94 640.46 724.183 644.994 720.67C649.64 717.156 651.964 712.396 651.964 706.39C651.964 702.423 651.114 699.08 649.414 696.36C647.714 693.64 644.767 691.146 640.574 688.88C636.494 686.5 630.77 684.006 623.404 681.4C613.09 677.66 605.27 673.07 599.944 667.63C594.73 662.19 592.124 654.766 592.124 645.36C592.124 638.9 593.767 633.403 597.054 628.87C600.34 624.223 604.874 620.653 610.654 618.16C616.547 615.666 623.29 614.42 630.884 614.42C637.57 614.42 643.69 615.043 649.244 616.29C654.797 617.536 659.84 619.18 664.374 621.22L659.614 634.31C655.42 632.496 650.83 630.966 645.844 629.72C640.97 628.473 635.87 627.85 630.544 627.85C622.95 627.85 617.227 629.493 613.374 632.78C609.52 635.953 607.594 640.203 607.594 645.53C607.594 649.61 608.444 653.01 610.144 655.73C611.844 658.45 614.62 660.886 618.474 663.04C622.327 665.193 627.54 667.516 634.114 670.01C641.254 672.616 647.26 675.45 652.134 678.51C657.12 681.456 660.86 685.026 663.354 689.22C665.961 693.413 667.264 698.683 667.264 705.03ZM725.885 737.5H682.025V728.66L696.305 725.43V628.36L682.025 624.96V616.12H725.885V624.96L711.605 628.36V725.43L725.885 728.66V737.5ZM801.342 627.85C788.309 627.85 778.052 632.213 770.572 640.94C763.092 649.666 759.352 661.623 759.352 676.81C759.352 691.883 762.809 703.84 769.722 712.68C776.749 721.406 787.232 725.77 801.172 725.77C806.499 725.77 811.542 725.316 816.302 724.41C821.062 723.503 825.709 722.37 830.242 721.01V734.27C825.709 735.97 821.005 737.216 816.132 738.01C811.372 738.803 805.649 739.2 798.962 739.2C786.609 739.2 776.295 736.65 768.022 731.55C759.749 726.45 753.515 719.196 749.322 709.79C745.242 700.383 743.202 689.333 743.202 676.64C743.202 664.4 745.412 653.633 749.832 644.34C754.365 634.933 760.995 627.623 769.722 622.41C778.449 617.083 789.045 614.42 801.512 614.42C814.319 614.42 825.482 616.8 835.002 621.56L828.882 634.48C825.142 632.78 820.949 631.25 816.302 629.89C811.769 628.53 806.782 627.85 801.342 627.85Z"
      fill="white" filter="url(#logo__music)" />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M187.35 455.499C168.93 455.499 151.934 449.5 154.288 441.999C157.026 433.274 157.615 427.975 158.022 424.303C158.666 418.507 158.859 416.766 166.35 411.999C169.606 410.372 175.83 410.864 182.676 411.405C186.343 411.695 190.187 411.999 193.85 411.999C202.754 411.999 217.447 368.422 225.728 343.862C227.677 338.083 229.27 333.357 230.35 330.5C233.546 321.583 236.761 311.171 240.003 300.676C249.042 271.414 258.282 241.5 267.85 241.5C287.63 241.5 328.25 270.4 347.85 484V492.499H998.65C998.65 492.499 996 503 991.063 523C991.063 523 326.35 523.999 308.85 523.499C301.233 523.282 301.187 510.69 301.136 496.357C301.068 477.76 300.991 456.232 284.35 454.999C257.35 453 251.85 450.5 251.85 450.5C249.031 450.187 249.012 450.266 245.056 466.469C242.697 476.133 238.938 491.53 232.35 516C227.528 533.907 223.17 551.178 219.18 566.995C207.347 613.89 198.741 647.999 190.85 647.999C180.849 647.999 120.979 633.199 128.85 617.999L187.35 455.499ZM277.85 345.5C257.85 392.5 256.35 419 256.35 419C256.35 419 330.85 460 277.85 345.5Z"
      fill="url(#paint0_linear)" />
    <path d="M560.222 467.216C560.222 470.435 558.312 472.045 554.494 472.045H527.541C524.696 472.045 521.551 471.034 518.107 469.013C514.738 466.916 512.155 464.408 510.358 461.488L491.267 431.615C483.405 419.337 473.897 413.197 462.741 413.197H435.339V461.488C435.339 464.408 434.291 466.916 432.194 469.013C430.173 471.034 427.702 472.045 424.782 472.045H403.669C400.749 472.045 398.241 471.034 396.145 469.013C394.048 466.916 393 464.408 393 461.488V321.669C393 318.749 394.011 316.241 396.032 314.145C398.054 312.048 400.524 311 403.444 311H496.096C513.241 311 527.279 315.604 538.21 324.813C549.216 334.022 554.719 346.451 554.719 362.099C554.719 383.886 540.606 397.549 512.38 403.09C516.872 404.737 521.027 407.582 524.846 411.625C528.664 415.593 533.044 421.396 537.985 429.032L558.425 461.488C559.623 463.585 560.222 465.494 560.222 467.216ZM435.339 381.415H483.181C490.892 381.415 497.668 379.88 503.508 376.811C509.423 373.741 512.38 368.837 512.38 362.099C512.38 355.36 509.423 350.456 503.508 347.387C497.668 344.317 490.892 342.782 483.181 342.782H435.339V381.415Z"
      fill="#2D2D2D" />
    <path d="M564.04 332.226V321.669C564.04 318.599 565.051 316.054 567.072 314.032C569.094 312.011 571.639 311 574.709 311H717.224C720.293 311 722.839 312.011 724.86 314.032C726.882 316.054 727.893 318.599 727.893 321.669V332.226C727.893 335.295 726.882 337.841 724.86 339.862C722.839 341.809 720.293 342.782 717.224 342.782H667.136V461.713C667.136 464.633 666.088 467.104 663.991 469.125C661.97 471.072 659.499 472.045 656.579 472.045H635.354C632.434 472.045 629.925 471.072 627.829 469.125C625.808 467.104 624.797 464.633 624.797 461.713V342.782H574.709C571.639 342.782 569.094 341.809 567.072 339.862C565.051 337.841 564.04 335.295 564.04 332.226Z"
      fill="#2D2D2D" />
    <defs>
      <linearGradient id="paint0_linear" x1="999" y1="502" x2="128" y2="502" gradientUnits="userSpaceOnUse">
        <stop stopColor="#920404" />
        <stop offset="0.461458" stopColor="#FF0000" />
        <stop offset="0.9999" stopColor="#FF0700" />
      </linearGradient>
      <filter id="logo__music">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
        <feOffset dx="13" dy="13" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.25" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);
