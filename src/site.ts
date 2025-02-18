export interface Site {
  domain: string;
  images: string[];
}

const urls = [
  "https://dscho.github.io/git-for-windows.github.io/favicon.ico",
  "https://ubg365.github.io/images/favicon.png",
  "https://leonardodamico.github.io/favicon.ico",
  "https://airflowkorea.github.io/favicon.ico",
  "https://games-site.github.io/games-site-logo.png",
  "https://snaptik.app/assets/img/favicon.png",
  "https://gaggiuino.github.io/media/GAGGIUINO_ICON_transp.png",
  "https://ubg98.github.io/assets/img/games/rooftop-snipers.png",
  "https://ovmm.github.io/static/images/HomeRobot_Logo_Horiz_Color_white_bg.png",
  "https://pmd.github.io/img/pmd-logo-white-600px.png",
  "https://winpython.github.io/images/winpython_title.png",
  "https://basketballstarsonline.github.io/images/favicon.png",
  "https://unetbootin.github.io/lxf.png",
  "https://classroom30x.github.io/Assests/Imgs/Logo.png",
  "https://livecodebench.github.io/images/favicon.svg",
  "https://piratebayproxies.github.io/favicon.ico",
  "https://slopegameio.github.io/favicon-32x32.png",
  "https://tropy.github.io/favicon.ico",
  "https://qupath.github.io/assets/images/favicon.ico",
  "https://wowsims.github.io/assets/favicon-CauNY9CE.ico",
  "https://rawgraphs.github.io/icons-b78b12bc0d267952abe12239ed435378/favicon.ico",
  "https://rdmla.github.io/images/icons_logos/rdmla_logo/RDMLALogo_Blue_450px.png",
  "https://geteduroam.github.io/favicon.png",
  "https://stenunblocked.github.io/stennerela.jpg",
  "https://feitutv.github.io/favicon.ico",
  "https://zcullen.github.io/assets/img/zcullen.jpg",
  "https://optijuegos.github.io/favicon.png",
  "https://hammerjs.github.io/assets/img/favicon.ico",
  "https://gnhustgames.github.io/assets/imageLogo/logo.jpg",
  "https://nianticlabs.github.io/cocreatar/resources/favi.png",
  "https://argoproj.github.io/favicon-32x32.png?v=48b38c857977860245a12be5b6e591b1",
  //hamburg
  "https://sage-hamburg.github.io/images/header-bg-light.jpg",
  "https://patrickstotz.github.io/old_projects/Accessibility_VIZ/img/Hamburg_all.jpg",
  "https://hamburg-vista.github.io/assets/images/remix.jpg",
  "https://raw.githubusercontent.com/mapbox/assembly/publisher-staging/src/svgs/mapbox.svg",
  "https://vahancho.github.io/assets/img/avatar_vahan.jpg",
];

function groupIntoSites(urls: string[]): Site[] {
  const sites = new Map<string, Site>();
  for (const url of urls) {
    const domain = new URL(url).origin;
    const path = new URL(url).pathname;
    if (!sites.has(domain)) {
      sites.set(domain, { domain, images: [] });
    }
    sites.get(domain).images.push(path);
  }
  return Array.from(sites.values());
}

export const sites: Site[] = groupIntoSites(urls);
