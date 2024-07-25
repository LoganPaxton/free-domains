addSubDomain({
  description: 'Media Site',
  domain: 'is-an.app',
  subdomain: 'drift',
  owner: {
    repo: 'https://github.com/loganpaxton/drif',
    email: 'loganpaxton6@gmail.com',
  },
  record: {
    CNAME: 'drift.vercel.app',
  },
  proxy: false,
})
