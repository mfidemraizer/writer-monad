import I from '../combinators/I.mjs'

const join = chain_ => m => chain_ (I) (m)

export default join
