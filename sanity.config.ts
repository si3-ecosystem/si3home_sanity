import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {singletonPlugin, pageStructure} from './plugins/settings'
import Utils from './components/documents/Utils'
import {deskTool} from 'sanity/desk'
import Hero from './components/documents/Hero'
import About from './components/documents/About'
import GrantingAccess from './components/documents/GrantingAccess'
import EducationalProgramming from './components/documents/EducationalProgramming'
import Sihercoactive from './components/documents/Sihercoactive'
import SiHerCoExplorer from './components/documents/Sihercoexplorer'
import Web3Brand from './components/documents/Web3Brand'
import {muxInput} from 'sanity-plugin-mux-input'
import MemberSpotlight from './components/documents/MemberSpotlight'
import EcosystemSpotlight from './components/documents/EcosystemSpotlight'
import ourMission from './components/documents/ourMission'
import onboard from './components/documents/onboard'
// import pricing from './components/documents/pricing'
// import myLogo from './components/shared/Logo'
import register from './components/documents/register'
import Partners from './components/documents/Partners'
import { PartnerTabFooter, PartnerTabHeader } from './components/documents/partners-tab-dta'

export default defineConfig({
  name: 'default',
  title: 'si3',
  projectId: 'h4ttr3aq',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: pageStructure([
        Utils,
        Hero,
        About,
        GrantingAccess,
        EducationalProgramming,
        Sihercoactive,
        Web3Brand,
        MemberSpotlight,
        PartnerTabHeader,
        EcosystemSpotlight,
        ourMission,
        onboard,
        SiHerCoExplorer,
        register,
      ]),
    }),
    singletonPlugin([
      Utils.name,
      Hero.name,
      About.name,
      GrantingAccess.name,
      EducationalProgramming.name,
      Sihercoactive.name,
      Web3Brand.name,
      MemberSpotlight.name,
      EcosystemSpotlight.name,
      ourMission.name,
      SiHerCoExplorer.name,
      onboard.name,
      register.name,
      PartnerTabHeader.name
    ]),
    visionTool(),
    muxInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
