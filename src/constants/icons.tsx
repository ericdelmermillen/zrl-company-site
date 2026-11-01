import { AiOutlineException } from "react-icons/ai";
import { BiSolidCommentError } from "react-icons/bi";
import { 
  BsCpuFill, 
  BsHddNetworkFill, 
  BsLightningChargeFill, 
  BsShieldExclamation 
} from "react-icons/bs";
import { 
  FaChartBar, 
  FaClipboardList, 
  FaCog, 
  FaCogs, 
  FaExclamationTriangle, 
  FaFileAlt, 
  FaGlobeAmericas, 
  FaIdCard, 
  FaSyncAlt, 
  FaTachometerAlt, 
  FaTasks, 
  FaWrench 
} from "react-icons/fa";
import { 
  FaBugs, 
  FaChartLine, 
  FaCode, 
  FaFolderOpen, 
  FaLink, 
  FaMicrochip, 
  FaPowerOff, 
  FaRegObjectUngroup, 
  FaRobot, 
  FaUserSecret 
} from "react-icons/fa6";
import { GiLightningArc } from "react-icons/gi";
import { IoIosLock, IoMdKey } from "react-icons/io";
import { IoFingerPrintOutline } from "react-icons/io5";
import { MdMonitor, MdOutlineSyncProblem, MdSecurity } from "react-icons/md";
import { PiKeyhole, PiTerminal } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import { TbCloudLock, TbError404, TbFaceId, TbScan } from "react-icons/tb";
import { FaDatabase, FaServer } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { LiaMicrochipSolid } from "react-icons/lia";
import { LuBinary } from "react-icons/lu";
import { MdUsb } from "react-icons/md";
import { PiNetworkFill } from "react-icons/pi";
import { VscGitMerge } from "react-icons/vsc";
import { IconType } from "react-icons";

const ADMIN_ICON_OPTIONS: IconType[] = [  
  FaChartBar,
  FaChartLine,
  FaClipboardList,
  FaCog,
  FaFileAlt,
  FaFolderOpen,
  FaPowerOff,
  FaTachometerAlt,
  FaTasks,
  FaSyncAlt,
  FaWrench,
  MdMonitor,
  PiTerminal,
  RiSettings5Fill
];

const DEFAULT_ICON_OPTIONS: IconType[] = [
  BsCpuFill,
  BsHddNetworkFill,
  FaCode,
  FaDatabase,
  FaRegObjectUngroup,
  FaServer,
  GrTechnology,
  LiaMicrochipSolid,
  LuBinary,
  MdUsb,
  PiNetworkFill,
  VscGitMerge,
];

const LOGIN_ICON_OPTIONS: IconType[] = [  
  FaGlobeAmericas,
  FaIdCard,
  FaLink,
  FaUserSecret,
  IoFingerPrintOutline,
  IoIosLock,
  IoMdKey,
  MdSecurity,
  PiKeyhole,
  PiTerminal,
  RiSettings5Fill,
  TbCloudLock,
  TbFaceId,
  TbScan
];

const NOT_FOUND_ICON_OPTIONS: IconType[] = [  
  AiOutlineException,
  BsCpuFill,
  BiSolidCommentError,
  BsLightningChargeFill,
  BsShieldExclamation,
  FaBugs,
  FaCode,
  FaCogs,
  FaFileAlt,
  FaMicrochip,
  FaRobot,
  GiLightningArc,
  TbError404,
  FaExclamationTriangle,
  MdOutlineSyncProblem
];

export { 
  ADMIN_ICON_OPTIONS,
  DEFAULT_ICON_OPTIONS,
  LOGIN_ICON_OPTIONS,
  NOT_FOUND_ICON_OPTIONS,
 };