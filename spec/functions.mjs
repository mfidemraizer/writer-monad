import jasmine from './jasmine'
import chai from 'chai'
import {
   of,
   chain,
   map,
   ap,
   join,
   StringMonoid
} from '../src/index.mjs'

const { expect } = chai

export default () =>
   jasmine.env.describe ('functions', () => {
      jasmine.env.it ('of', () => {
         const of_ = of ('')

         const w = of_ (1)

         expect (w).to.have.ordered.members ([ 1, '' ])
      })

      jasmine.env.it ('chain', () => {
         const of_ = of ('')
         const chain_ = chain (StringMonoid.concat)

         const w = of_ (1)
         const w_ = chain_ (x => [ x + 1, 'hello' ]) (w)

         expect (w_).to.have.ordered.members ([ 2, 'hello' ])
      })

      jasmine.env.it ('map', () => {
         const of_ = of ('')

         const w = of_ (1)
         const w_ = map (x => x + 1) (w)

         expect (w_).to.have.ordered.members ([ 2, '' ])
      })

      jasmine.env.it ('ap', () => {
         const of_ = of ('')
         const chain_ = chain (StringMonoid.concat)
         const join_ = join (chain_)
         const ap_ = ap ({ of_, chain_, join_ })

         const fW = of_ (x => x + 1)
         const w = of_ (1)
         const w_ = ap_ (fW) (w)

         expect (w_).to.have.ordered.members ([ 2, '' ])
      })

      jasmine.env.it ('join', () => {
         const of_ = of ('')
         const chain_ = chain (StringMonoid.concat)
         const join_ = join (chain_)

         const w = of_ (of_ (1))
         const w_ = join_ (w)

         expect (w_).to.have.ordered.members ([ 1, '' ])
      })
   })
