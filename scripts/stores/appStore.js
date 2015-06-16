export default {
  //icons data is enumerable. it allows us to create an icon component factory
  navIcons: [
    {
      link: 'testPage',
      size: 'large',
      icon: ''
    },
    {
      link: 'testPage',
      size: 'large',
      icon: ''
    },
    {
      link: 'testPage',
      size: 'large',
      icon: ''
    },
    {
      link: 'notFound',
      size: 'small',
      icon: ''
    },
  ],
  //app's pages
  activePage: [
    {
      link: 'testPage',
      //page's state, for example showing info or form block
      //this affects not only what block to display but also icon in the main info block
      //thus keeping global state is useful
      states: [
        {
          infoBlock: 'info' //or 'form'
        }
      ],
      //page's enumerable elements for factoring
      elements: {
        //list for display of company's info - used to map company's data
        companyProps: [
          {
            title: 'industry',
            dataField: 'industry'
          },
          {
            title: 'employes',
            dataField: 'employes'
          },
          {
            title: 'revenue',
            dataField: 'revenue'
          },
          {
            title: 'headquaters',
            dataField: 'city'
          }
        ],
        //same for user form
        userProps: [
          {
            title: 'first name',
            dataField: 'name'
          },
          {
            title: 'last name',
            dataField: 'lastName'
          },
          {
            title: 'revenue',
            dataField: 'revenue'
          },
          {
            title: 'company',
            dataField: 'company'
          },
          {
            title: 'website',
            dataField: 'website'
          },
          {
            title: 'title',
            dataField: 'title'
          },
          {
            title: 'email',
            dataField: 'email'
          },
          {
            title: 'phone',
            dataField: 'phone'
          }
        ]
      }
    },
    {
      link: 'notFound',
      states: [],
      elements: []
    }
  ]
};