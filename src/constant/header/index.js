import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CallIcon from "@mui/icons-material/Call";

export const element = [
  { name: "Home", to: "/", icon: HomeIcon },
  { name: "Profile", to: "/profile", icon: PersonIcon },
  { name: "Practice Area", to: "/practicearea", icon: LocalLibraryIcon },
  {
    name: "Reasearch & Publication",
    to: "/research&publication",
    icon: MenuBookIcon,
  },
  { name: "Blogs", to: "/blogs", icon: KeyboardHideIcon },
  { name: "Gallary", to: "/gallary", icon: PhotoLibraryIcon },
  { name: "Contact", to: "/contact", icon: CallIcon },
];

// {
//   "element":
// }
