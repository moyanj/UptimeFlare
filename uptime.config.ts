const pageConfig = {
  // Title for your status page
  title: "MoYan's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/moyanj', label: 'GitHub' },
    { link: 'https://blog.moyanjdc.top/', label: '博客' }
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 5,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'blog',
      // `name` is used at status page and callback message
      name: '博客',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://blog.moyanjdc.top',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'hitokoto',
      // `name` is used at status page and callback message
      name: '一言API',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://h.moyanjdc.top',
    },
    {
      id: 'ai',
      name: 'LLM API',
      method: 'GET',
      target: 'https://ai.moyanjdc.top/'
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'alist',
      // `name` is used at status page and callback message
      name: 'AList',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://file.moyanjdc.top',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'searxng',
      // `name` is used at status page and callback message
      name: 'SearXNG',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://s.moyanjdc.top',
    },
  {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'wakapi',
      // `name` is used at status page and callback message
      name: 'Wakapi',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://wakapi.moyanjdc.top',
    }
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      if (!isUp) {
      } else {
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
