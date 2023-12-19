const ArchASCII = () => {
  return (
    <div className="flex justify-center gap-x-8 font-mono">
      <pre className="gap-x-4 text-argentinian-blue text-[25px]  leading-[26px]">
      {`
                  -\`
                 .o+\`
                \`ooo/
               \`+oooo:
              \`+oooooo:
              -+oooooo+:
            \`/:-:++oooo+:
           \`/++++/+++++++:
          \`/++++++++++++++:
         \`/+++ooooooooooooo/\`
        ./ooosssso++osssssso+\`
       .oossssso-\`\`\`\`/ossssss+\`
      -osssssso.      :ssssssso.
     :osssssss/        osssso+++.
    /ossssssss/        +ssssooo/-
  \`/ossssso+/:-        -:/+osssso+-
 \`+sso+:-\`                 \`.-/+oso:
\`++:.                           \`-/+/
.\`                                 \`/
`}
      </pre>

      <div className="text-sm">
        <h1 className="text-xl text-buff">
          copernicus@ufl<br />
          --------------
        </h1>
        <table>
          <tr>
            <td className="text-argentinian-blue">OS:</td>
            <td>Arch Linux x86_64</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Host:</td>
            <td>82K2 (IdeaPad Gaming 3 15ACH6)</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Kernel:</td>
            <td>6.6.7-arch1-1</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Uptime:</td>
            <td>2 hours, 52 mins</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Packages:</td>
            <td>893 (pacman)</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Shell:</td>
            <td>zsh 5.9</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Display:</td>
            <td>1920x1080 @ 120Hz [Built-in]</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">WM:</td>
            <td>Sway (Wayland)</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Theme:</td>
            <td>One Dark</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Icons:</td>
            <td>Adwaita</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Font:</td>
            <td>JetBrains Mono Nerd</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Cursor:</td>
            <td>Adwaita</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Terminal:</td>
            <td>Kitty</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">CPU:</td>
            <td>AMD Ryzen 5 5600H (12) @ 4.28 GHz</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">GPU 1:</td>
            <td>AMD Radeon Vega Series / Radeon Vega Mobile Series</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">GPU 2:</td>
            <td>NVIDIA GeForce RTX 3050 Mobile</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Memory:</td>
            <td>13.03 GiB / 19.39 GiB (67%)</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Swap:</td>
            <td>0 B / 12.04 GiB (0%)</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Disk (/):</td>
            <td>74.52 GiB / 112.00 GiB (67%) - btrfs</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Local IP (wlo1):</td>
            <td>192.168.1.44/24 *</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Battery:</td>
            <td>100% [Full]</td>
          </tr>
          <tr>
            <td className="text-argentinian-blue">Locale:</td>
            <td>en_US.UTF-8</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ArchASCII;
