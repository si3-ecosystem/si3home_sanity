import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {singletonPlugin, pageStructure} from './plugins/settings'
import Utils from './components/documents/Utils'
import {deskTool} from 'sanity/desk'
import GrantingAccess from './components/documents/GrantingAccess'
import EducationalProgramming from './components/documents/EducationalProgramming'

import SiHerCoExplorer from './components/documents/Sihercoexplorer'
import Web3Brand from './components/documents/Web3Brand'
import {muxInput} from 'sanity-plugin-mux-input'
import MemberSpotlight from './components/documents/MemberSpotlight'
import EcosystemSpotlight from './components/documents/EcosystemSpotlight'
// import pricing from './components/documents/pricing'
// import myLogo from './components/shared/Logo'

import {  PartnerTabHeader } from './components/documents/partners-tab-dta'
import { JoinBuildersTab,JoinExplorerTab,JoinLeadersTab } from './components/documents/join'

export default defineConfig({
  name: 'default',
  title: 'si3',
  projectId: 'h4ttr3aq',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: pageStructure([
        Utils,
        GrantingAccess,
        EducationalProgramming,
      
        Web3Brand,
        MemberSpotlight,
        PartnerTabHeader,
        EcosystemSpotlight,
        JoinBuildersTab,
        JoinExplorerTab,
        JoinLeadersTab,
        SiHerCoExplorer,
      ]),
    }),
    singletonPlugin([
      Utils.name,
      GrantingAccess.name,
      EducationalProgramming.name,
      Web3Brand.name,
      MemberSpotlight.name,
      EcosystemSpotlight.name,
      
      SiHerCoExplorer.name,
      JoinBuildersTab.name,
      JoinExplorerTab.name,
      JoinLeadersTab.name,
      PartnerTabHeader.name
    ]),
    visionTool(),
    muxInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
