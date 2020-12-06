import React from "react";
import Story from "./Baby Components/Story";
import "../../Styles/Stories.css";

function Stories() {
  return (
    <div className="stories">
      <Story
        className="stories__card"
        storyImage="https://cdn.cloudflare.steamstatic.com/steam/apps/945360/capsule_616x353.jpg?t=1606422465"
        profileImage="https://yt3.ggpht.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ=s88-c-k-c0xffffffff-no-rj-mo"
        profileName="Liven Navfal"
      />

      <Story
        className="stories__card"
        storyImage="https://wallpapercave.com/wp/wp5152418.jpg"
        profileImage="https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-BB-Logo-by-Greenlines-Studios.jpg"
        profileName="Bobby Black"
      />

      <Story
        className="stories__card"
        storyImage="https://i.pinimg.com/originals/a1/53/97/a15397c539f1e70be84e0b4f13218a9d.jpg"
        profileImage="https://i.pinimg.com/originals/08/e4/1b/08e41b51c7748251170809f6371a4828.png"
        profileName="Faiz Fabulous"
      />

      <Story
        className="stories__card"
        storyImage="https://www.wallpaperflare.com/static/585/314/540/mountains-landscape-digital-art-fantasy-art-wallpaper.jpg"
        profileImage="https://i.pinimg.com/280x280_RS/f9/3b/69/f93b69e9d973e52fbcd5aba5ed0b8346.jpg"
        profileName="Nabeel Ahmed"
      />

      <Story
        className="stories__card"
        storyImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F383137.jpg&f=1&nofb=1"
        profileImage="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F_RzAXbzUy1Qw%2FSjRkPd5Mz-I%2FAAAAAAAAAE0%2FdrMDX1ENh4U%2Fs400%2Ffazil-logo.jpg&f=1&nofb=1"
        profileName="Fazil"
      />
    </div>
  );
}

export default Stories;
