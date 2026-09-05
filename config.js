window.WILLS_CONFIG = Object.freeze({
  appName: 'Wills Coffee',

  // WILLS MASTER — CORE SYSTEM
  // Dipakai khusus untuk Finance Center + HR Center.
  masterBase: 'https://script.google.com/macros/s/AKfycbwPb8C6LdALHakQbb4anSJRietY7j9yViheXqPmLHcFuYMhby3JlcjZiexAiQ8Uc557/exec',

  // Portal Owner All Outlet — tetap terpisah.
  ownerAllOutletUrl: 'https://script.google.com/macros/s/AKfycbx6RHzh1nJz7BxZeyeaaGyqwFEQ_xeIu8VpLgiUzv3yodfaQcfl73JqyjPxtXZ1S43a9Q/exec',

  outlets: Object.freeze([
    Object.freeze({
      id:'rb',
      name:'Pasar Rebo',
      code:'RB',
      base:'https://script.google.com/macros/s/AKfycbwbT9bXoVNVpCrI93otlDLwrrNxPjoEtn6KrNccVw3v88NTZdSbhUNJ8_cQHhoMxvLm/exec'
    }),
    Object.freeze({
      id:'tm',
      name:'Tegal Munjul',
      code:'TM',
      base:'https://script.google.com/macros/s/AKfycbyFIv7Rm6lYZevuA-zY5_ZLE2KOrP_Vs4FQ9dthuasutgDjV3YRfH7x3X-0I_7yxy51/exec'
    }),
    Object.freeze({
      id:'upi',
      name:'UPI',
      code:'UPI',
      base:'https://script.google.com/macros/s/AKfycbyQZ6JoFARl23P0V6r0nXclX71tWBkl8dn90cg7deOS0QuDO9XVAlUo6tsXwcWPXyMXmw/exec'
    }),
    Object.freeze({
      id:'cikopak',
      name:'Cikopak',
      code:'CPK',
      base:'https://script.google.com/macros/s/AKfycbydPrJ8xRJ13ad0sggMJhJ1d5UzHU6UjFvABf0mGQe7pKrV2dzMQ51wj1lRT9rQ3G58Ug/exec'
    }),
    Object.freeze({
      id:'cipaisan',
      name:'Cipaisan',
      code:'CPS',
      base:'https://script.google.com/macros/s/AKfycbyOcJvoJm6CgFc-6Qv7mrAeG2N0FFt9b2XXz1w8iiuJP61I8_xqqcg9TJ9qmAJJE7mEIA/exec'
    })
  ]),

  investors: Object.freeze({
    investor1: Object.freeze({outletIds:['rb','tm','upi']}),
    investor2: Object.freeze({outletId:'cikopak'}),
    investor3: Object.freeze({outletId:'cipaisan'})
  }),

  investor1AllOutletUrl: 'https://script.google.com/macros/s/AKfycbwTrqbe2hdMnGGt8noVFI4R6frKtUbLBckVP8LaU-OUHS6SGj2S4wv8XmU_vKXX9fcW/exec'
});
