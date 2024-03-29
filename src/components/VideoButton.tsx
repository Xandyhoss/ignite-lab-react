import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonProps {
  variant: "discord" | "challenge";
}

export function VideoButton(props: ButtonProps) {
  return props.variant === "discord" ? (
    <a
      href=""
      className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
    >
      <DiscordLogo size={24} />
      Comunidade do Discord
    </a>
  ) : (
    <a
      href=""
      className="p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-50 hover:text-gray-900 transition-colors"
    >
      <Lightning size={24} />
      Acesse o Desafio
    </a>
  );
}
