import flagBR from 'assets/images/flag_brazil.png';
// import flagCZ from 'assets/images/flag_czechia.png';
import flagUS from 'assets/images/flag_usa.png';

export default [
  {
    name: 'English',
    code: 'en_us',
    next: 'pt_br',
    flag: flagUS,
  },
  {
    name: 'Portuguese Brazil',
    code: 'pt_br',
    next: 'en_us',
    flag: flagBR,
  },
  // {
  //   name: 'Czech',
  //   code: 'cz',
  //   next: 'en_us',
  //   flag: flagCZ,
  // },
];
