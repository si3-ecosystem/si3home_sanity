import blockContent from './blockContent'

import Utils from '../components/documents/Utils'
import Hero from '../components/documents/Hero'
import button from '../components/objects/button'
import About from '../components/documents/About'
import ButtonPreview from '../components/shared/ButtonPreview'
import GrantingAccess from '../components/documents/GrantingAccess'
import Builders from '../components/documents/Builders'
import EducationalProgramming from '../components/documents/EducationalProgramming'
import EducationalProgrammingEvents from '../components/documents/EducationalProgrammingEvents'
import Presenters from '../components/documents/Presenters'
import Sihercoactive from '../components/documents/Sihercoactive'
import Web3Brand from '../components/documents/Web3Brand'
import Teammembers from '../components/documents/Teammembers'
import MemberSpotlight from '../components/documents/MemberSpotlight'
import spotlightList from '../components/documents/spotlightList'
import Sihercoexplorer from '../components/documents/Sihercoexplorer'
import EcosystemSpotlight from '../components/documents/EcosystemSpotlight'
import ourMission from '../components/documents/ourMission'
import testimonials, { partnerTestimonials } from '../components/documents/testimonials'
import onboard from '../components/documents/onboard'
import pricing from '../components/documents/pricing'
import register from '../components/documents/register'
import cards from './cards'
import memberPolicy from './memberPolicy'
import privacyPolicy from './privacyPolicy'
import communityButton from './communityButton'
import Partners from '../components/documents/Partners'
import { PartnerTabFooter, PartnerTabPrograms, PartnerTabHeader } from '../components/documents/partners-tab-dta';
import { JoinBuildersTab, JoinExplorerTab, JoinLeadersTab } from '../components/documents/join'
import { explorerVideoCategories, explorerVideos } from '../components/documents/explorer-videos'
import { programEvents, programPosts, programReplays } from '../components/documents/programs'
import { educationalReplays, events, posts } from '../components/documents/coActiveSchemas'
import { members } from '../components/documents/members'
import { FixxEducationalReplays, FixxEvents, fixxPosts } from '../components/documents/fixxSchema'

export const schemaTypes = [
  Utils,
  Hero,
  About,
  GrantingAccess,
  EducationalProgramming,
  Presenters,
  Sihercoactive,
  Web3Brand,
  EducationalProgrammingEvents,
  register,
  Builders,
  Sihercoexplorer,
  button,
  ButtonPreview,
  Teammembers,
  MemberSpotlight,
  EcosystemSpotlight,
  spotlightList,
  ourMission,
  testimonials,
  onboard,
  PartnerTabPrograms,
  PartnerTabFooter,
  PartnerTabHeader,
  pricing,
  Partners,
  partnerTestimonials,
  JoinBuildersTab,
  JoinExplorerTab,
  JoinLeadersTab,
  explorerVideoCategories,
  explorerVideos,
  posts,
  events,
  educationalReplays,

  fixxPosts,
  FixxEvents,
  FixxEducationalReplays,

  programPosts,
  programEvents,
  programReplays,
  members,
  blockContent,
  cards,
  communityButton,
  memberPolicy,
  privacyPolicy
]
