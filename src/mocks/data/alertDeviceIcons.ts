import {
  Cloud,
  Database,
  Globe,
  HardDrive,
  KeyRound,
  Laptop,
  Mail,
  Monitor,
  Router,
  Server,
  Shield,
  Users,
} from "lucide-react";

export const alertDeviceIcons = {
  server: Server,
  monitor: Monitor,
  laptop: Laptop,
  shield: Shield,
  database: Database,
  cloud: Cloud,
  globe: Globe,
  router: Router,
  key: KeyRound,
  mail: Mail,
  users: Users,
  "hard-drive": HardDrive,
} as const;
