export const languages = {
  data: {
    labels: ['javascript', 'html', 'css', 'sql', 'python'],
    series: [
      [5, 5, 4.5, 3, 3],
    ],
  },
  options: {
    axisY: {
      labelInterpolationFnc: l => `${l} ⭐`,
      onlyInteger: true,
    },
  },
}