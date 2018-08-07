import jasmine from './jasmine.mjs'
import JasmineSpecReporter from 'jasmine-spec-reporter'
import functions from './functions.mjs'

jasmine.env.clearReporters ()
jasmine.env.addReporter (
   new JasmineSpecReporter.SpecReporter ({
      // add jasmine-spec-reporter
      suite: {
         displayNumber: true
      },
      spec: {
         displayPending: true,
         displayDuration: true,
         displaySuccessful: true
      },
      summary: {
         displaySuccessful: false,
         displayPending: false,
         displayFailed: false,
         displayDuration: true
      }
   })
)

jasmine.env.describe ('Writer', () => {
   functions ()
})

jasmine.execute ()
