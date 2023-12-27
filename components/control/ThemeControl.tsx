import React from "react";
import ThemeSelect from "../ThemeSelect";

export default function ThemeControl() {
  const themes = [
    { name: 'Abyss', value: 'abyss' },
    // { name: 'Atom Dark', value: 'prism-atom-dark' },
    // { name: 'Base16 Ateliersulphurpool Light', value: 'prism-base16-ateliersulphurpool.light' },
    // { name: 'CB', value: 'prism-cb' },
    // { name: 'Coldark Cold', value: 'prism-coldark-cold' },
    // { name: 'Coldark Dark', value: 'prism-coldark-dark' },
    // { name: 'Coy Without Shadows', value: 'prism-coy-without-shadows' },
    { name: 'Darcula', value: 'darcula' },
    { name: 'Dracula', value: 'dracula' },
    // { name: 'Duotone Dark', value: 'prism-duotone-dark' },
    // { name: 'Duotone Earth', value: 'prism-duotone-earth' },
    // { name: 'Duotone Forest', value: 'prism-duotone-forest' },
    // { name: 'Duotone Light', value: 'prism-duotone-light' },
    // { name: 'Duotone Sea', value: 'prism-duotone-sea' },
    // { name: 'Duotone Space', value: 'prism-duotone-space' },
    // { name: 'Ghcolors', value: 'prism-ghcolors' },
    // { name: 'Gruvbox Dark', value: 'prism-gruvbox-dark' },
    // { name: 'Gruvbox Light', value: 'prism-gruvbox-light' },
    // { name: 'Holi Theme', value: 'prism-holi-theme' },
    // { name: 'Hopscotch', value: 'prism-hopscotch' },
    // { name: 'Laserwave', value: 'prism-laserwave' },
    // { name: 'Lucario', value: 'prism-lucario' },
    // { name: 'Material Dark', value: 'prism-material-dark' },
    // { name: 'Material Light', value: 'prism-material-light' },
    // { name: 'Material Oceanic', value: 'prism-material-oceanic' },
    // { name: 'Night Owl', value: 'prism-night-owl' },
    // { name: 'Nord', value: 'prism-nord' },
    // { name: 'One Dark', value: 'prism-one-dark' },
    // { name: 'One Light', value: 'prism-one-light' },
    // { name: 'Pojoaque', value: 'prism-pojoaque' },
    // { name: 'Shades of Purple', value: 'prism-shades-of-purple' },
    // { name: 'Solarized Dark Atom', value: 'prism-solarized-dark-atom' },
    // { name: 'Synthwave84', value: 'prism-synthwave84' },
    // { name: 'VS', value: 'prism-vs' },
    // { name: 'VSC Dark Plus', value: 'prism-vsc-dark-plus' },
    // { name: 'Xonokai', value: 'prism-xonokai' },
    // { name: 'Z Touch', value: 'prism-z-touch' },
  ];
  

  return (
    <div className="border-b-[0.5px] border-t-[0.5px]  border-[#414D77]">
      <div className="p-[28px]">
        <h2 className="text-base  text-secondary font-medium">Choose Theme</h2>

        <ThemeSelect data={themes} />
      </div>
    </div>
  );
}
