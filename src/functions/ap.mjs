import B from '../combinators/B.mjs'
import map from './map.mjs'

const ap = ({ of_, chain_, join_ }) => apply => m =>
   join_ (map (f => chain_ (B (of_) (f)) (m)) (apply))

export default ap
