interface IURL {
  url: string;
}
export const MS_SERVICE_URL: { [serviceName: string]: IURL } = {
  "ms_account": {
    url: "http://cudo-ms-account.softobiz.net/graphql"
  },
  "ms_document": {
    url: "http://cudo-ms-document.softobiz.net/graphql"
  },
  "ms_project": {
    url: "http://cudo-ms-project.softobiz.net/graphql"
  },
  "ms_task": {
    url: "http://cudo-ms-task.softobiz.net/graphql"
  },
  "ms_cost": {
    url: "http://cudo-ms-cost.softobiz.net/graphql"
  },
  "ms_meeting": {
    url: "http://cudo-ms-meeting.softobiz.net/graphql"
  },
  "mf_cost_app": {
    url: "http://cudo-mf_cost.softobiz.net"
  },
  "mf_meeting_app": {
    url: "http://cudo-mf_meeting.softobiz.net"
  },
  "mf_project_app": {
    url: "http://cudo-mf-project.softobiz.net"
  },
  "mf_task_app": {
    url: "http://cudo-mf-task.softobiz.net"
  },
  "mf_document_app": {
    url: "http://cudo-mf-document.softobiz.net"
  },
  "kratos_BASE_URL": {
    url: "http://cudoapp.softobiz.net"
  },
  "kratos_KRATOS_BROWSER_URL": {
    url: "http://cudoapp.softobiz.net/.ory/kratos/public"
  },
  "kratos_KRATOS_PUBLIC_URL": {
    url: "http://cudoapp.softobiz.net/.ory/kratos/public"
  },
  "kratos_KRATOS_ADMIN_URL": {
    url: "http://192.168.1.5:4434"
  },
  "CDN_ASSETS_URL": {
    url: "https://cudodevcdn.azureedge.net"
  }
}