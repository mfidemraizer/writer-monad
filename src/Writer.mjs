import map from './functions/map.mjs'
import of from './functions/of.mjs'
import chain from './functions/chain.mjs'
import join from './functions/join.mjs'
import ap from './functions/ap.mjs'

const Writer = ({ zero, concat }) => {
   const of_ = of (zero)
   const chain_ = chain (concat)
   const join_ = join (chain_)
   const ap_ = ap ({ of_, chain_, join_ })

   return {
      of: of_,
      'fantasy-land/of': of_,
      chain: chain_,
      map,
      ap: ap_,
      join: join_
   }
}

export default Writer
export const $$type = 'monad-writer/MonadWriter@0.1.0'
