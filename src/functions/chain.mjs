const chain = concat => f => ([ x, w ]) => {
   const [ x_, w_ ] = f (x)

   return [ x_, concat (w) (w_) ]
}

export default chain
