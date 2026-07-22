"use client"

import type { SvgIconProps } from "@mui/material/SvgIcon"
import BarChart from "@mui/icons-material/BarChart"
import Visibility from "@mui/icons-material/Visibility"
import SmartToy from "@mui/icons-material/SmartToy"
import Timeline from "@mui/icons-material/Timeline"
import Code from "@mui/icons-material/Code"
import Build from "@mui/icons-material/Build"
import ImageSearch from "@mui/icons-material/ImageSearch"
import Analytics from "@mui/icons-material/Analytics"
import Psychology from "@mui/icons-material/Psychology"
import WbSunny from "@mui/icons-material/WbSunny"
import TrackChanges from "@mui/icons-material/TrackChanges"
import Lightbulb from "@mui/icons-material/Lightbulb"
import CalendarMonth from "@mui/icons-material/CalendarMonth"
import Article from "@mui/icons-material/Article"
import Biotech from "@mui/icons-material/Biotech"
import Group from "@mui/icons-material/Group"

const iconMap: Record<string, React.ComponentType<SvgIconProps>> = {
  BarChart,
  Visibility,
  SmartToy,
  Timeline,
  Code,
  Build,
  ImageSearch,
  Analytics,
  Psychology,
  WbSunny,
  TrackChanges,
  Lightbulb,
  CalendarMonth,
  Article,
  Biotech,
  Group,
}

export default function Icon({ name, ...props }: { name: string } & SvgIconProps) {
  const Component = iconMap[name]
  if (!Component) return <span>{name}</span>
  return <Component {...props} />
}
