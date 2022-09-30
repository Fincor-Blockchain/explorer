import { Accounts, AccountView } from 'src/views/accounts';
import { Nodes } from 'src/views/nodes';
import { Contracts } from 'src/views/contracts';
import { Charts } from 'src/views/charts';
import { Transactions, TransactionView } from 'src/views/transactions';
import { TokenTracker } from 'src/views/tokentracker';
import { Representatives } from 'src/views/representatives';
import { Votes } from 'src/views/votes';
import { Proposals } from 'src/views/proposals';
import { FoundationAddresses } from 'src/views/foundationaddresses';
import { NewUserGuide } from 'src/views/newuserguide';
import { FincorApi } from 'src/views/fincorapi';
import { Blocks, ViewBlock } from 'src/views/blocks';
import { Landing } from 'src/views/landing';
// Work in progress and routes will be uncommented👇
// import { InternalTxs, VerifiedContracts } from 'src/views/contracts';
// import { UncleBlocks } from 'src/views/uncles';
// import { ViewAddress } from 'src/views/addresses';
import NotFound from './NotFound';
import { Faq } from 'src/views/faq';
import { TopStatistics } from 'src/views/topstatistics';

export const app = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/txs',
    component: Transactions
  },
  {
    path: '/txs/:hash',
    component: TransactionView
  },
  {
    path: '/tokentracker',
    component: TokenTracker
  },
  {
    path: '/representatives',
    component: Representatives
  },
  {
    path: '/votes',
    component: Votes
  },
  {
    path: '/proposals',
    component: Proposals
  },
  {
    path: '/foundationaddresses',
    component: FoundationAddresses
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/newuserguide',
    component: NewUserGuide
  },
  {
    path: '/fincorapi',
    component: FincorApi
  },
  {
    path: '/topstatistics',
    component: TopStatistics
  },

  {
    path: '/blocks',
    component: Blocks
  },
  {
    path: '/blocks/:height',
    component: ViewBlock
  },
  {
    path: '/charts',
    component: Charts
  },
  {
    path: '/accounts',
    component: Accounts
  },
  {
    path: '/account-details/:address',
    component: AccountView
  },
  {
    path: '/nodes',
    component: Nodes
  },
  {
    path: '/contracts',
    component: Contracts
  },

  // {
  //   path: '/forked_blocks',
  //   component: ForkedBlocks
  // },
  // {
  //   path: '/uncles',
  //   component: UncleBlocks
  // },

  // {
  //   path: '/verified_contracts',
  //   component: VerifiedContracts
  // },
  // {
  //   path: '/internal_txs',
  //   component: InternalTxs
  // },
  {
    path: '/not_found',
    component: NotFound
  }
  // {
  //   path: '/addresses/:address',
  //   component: ViewAddress
  // }
];
