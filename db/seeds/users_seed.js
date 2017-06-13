const models = require('../models');

exports.seed = function (knex, Promise) {
  // user1
  return models.Users.forge({
    full_name: 'Rajas Kale',
    vertical: 'Biomedical',
    github_url: 'https://github.com/Kale007',
    linkedin_url: 'https://www.linkedin.com/in/rajas-kale/',
    image: 'https://avatars2.githubusercontent.com/u/26387553?v=3&s=460',
    summary: 'Combining Software with Neural Engineering',
  }).save()
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'kale007',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 9
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 10
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 1,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 1,
      name: 'education',
      role: 'PhD student',
      description: 'I like learn',
      start_date: 2013,
      end_date: 2017,
      organization: 'Mayo Clinic'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 1,
      name: 'professional',
      role: 'Quality Control',
      description: 'Test specialist on injectable prescriptions drug',
      start_date: 2009,
      end_date: 2011,
      organization: 'Lifecore LLC'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 1,
      name: 'projects',
      role: 'Pursumé',
      description: 'We made this damn app!!!!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user2
  .then((user) => {
    return models.Users.forge({
      full_name: 'Alan Zheng',
      vertical: 'Finance/Banking',
      github_url: 'https://github.com/aszheng',
      linkedin_url: 'https://www.linkedin.com/in/aszheng/',
      image: 'https://avatars0.githubusercontent.com/u/20808751?v=3&s=460',
      summary: 'I like pandas',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'aszheng',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 2
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 2,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 2,
      name: 'professional',
      role: 'Finance & Operations Analyst',
      description: 'Excel Stuff',
      start_date: 2015,
      end_date: 2017,
      organization: 'App Annie'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 2,
      name: 'projects',
      role: 'Pursumé',
      description: 'You see this app? We made this app!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 2,
      name: 'education',
      role: 'Student',
      description: 'All this learning here',
      start_date: 2010,
      end_date: 2014,
      organization: 'Berkeley'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  //user 3
  .then((user) => {
    return models.Users.forge({
      full_name: 'Lavanya AC',
      auth_id:'auth0%7C592e5a4f8fb5fe30a672ce8b',
      vertical: 'Technology',
      github_url: 'https://github.com/lavanyaac',
      linkedin_url: 'https://www.linkedin.com/in/lavanya-ammi-chandrashekara-02a21713b/',
      image: 'https://avatars0.githubusercontent.com/u/25909813?v=3&s=460',
      summary: 'I am a full stack developer',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'lavanyaac',
      password: 'password'
    }).save()
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 3,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 3,
      name: 'professional',
      role: 'Software Engineer',
      description: 'I like to code',
      start_date: 2013,
      end_date: 2017,
      organization: 'Target'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 3,
      name: 'projects',
      role: 'Pursumé',
      description: 'Best app ever!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 3,
      name: 'education',
      role: 'Student',
      description: 'I graduated',
      start_date: 2002,
      end_date: 2006,
      organization: 'BIT'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  //user4
  .then((user) => {
    return models.Users.forge({
      full_name: 'Anthony Wong',
      vertical: 'Technology',
      github_url: 'https://github.com/shrimpwongton',
      linkedin_url: 'https://www.linkedin.com/in/anthonywg/',
      image: 'https://avatars0.githubusercontent.com/u/6591210?v=3&s=400',
      summary: 'Android Developer transitioning towards Full Stack Software Engineering.',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'shrimpwongton',
      password: 'password'
    }).save()
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 12
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 14
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'professional',
      role: 'Andriod Developer',
      description: 'Java Baby',
      start_date: 2016,
      end_date: 2016,
      organization: 'DabKick'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'projects',
      role: 'Viator',
      description: 'Material UI',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'education',
      role: 'Student',
      description: 'BS Computer Science',
      start_date: 2012,
      end_date: 2016,
      organization: 'UC San Diego'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user5
  .then((user) => {
    return models.Users.forge({
      full_name: 'Charles Kim',
      vertical: 'Services',
      github_url: 'https://github.com/ChKim',
      linkedin_url: 'https://www.linkedin.com/in/cjkim0119/',
      image: 'https://avatars1.githubusercontent.com/u/20958854?v=3&s=460',
      summary: 'I make stuff for that do things for reasons',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'ChKim',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 5,
      tag_id: 10
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 5,
      name: 'professional',
      role: 'Senior Analyst',
      description: 'Instacart enables and provides on-demand grocery deliveries within as little as one hour in 30+ markets, from 100+ grocery retailers. A YC alum, Instacart has received funding from partners including Kleiner Perkins, Sequoia, and Andreessen Horowitz.',
      start_date: 2014,
      end_date: null,
      organization: 'Instacart'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 5,
      name: 'projects',
      role: 'Something Something Recipes',
      description: 'Eat everything!',
      start_date: 2016,
      end_date: 2017,
      organization: 'Infamous Frogs'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 5,
      name: 'education',
      role: 'B.S. Finance',
      description: 'Founded in 1881 as the first collegiate business school, the Wharton School of the University of Pennsylvania is recognized globally for intellectual leadership and ongoing innovation across every major discipline of business education. With a broad global community and one of the most published business school faculties, Wharton creates economic and social value around the world.',
      start_date: 2002,
      end_date: 2010,
      organization: 'University of Pennsylvania'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user6
  .then((user) => {
    return models.Users.forge({
      full_name: 'Ming Feng',
      vertical: 'Biomedical',
      github_url: 'https://github.com/minggfeng',
      linkedin_url: 'https://www.linkedin.com/in/minggfeng/',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAADhAAAAJGNkNmRlMGJjLTZiNWItNDBhZC1hOTRiLTc4MWU1NDZiMjJhMw.jpg',
      summary: 'Full stack engineer currently looking for opportunities',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'mingfeng',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 11
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 6,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 6,
      name: 'professional',
      role: 'Clinical Systems Analyst',
      description: 'Supported the applications of OpTime, Anesthesia, and the surgical component of Phoenix.',
      start_date: 2014,
      end_date: 2017,
      organization: 'Stanford Health Care'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 6,
      name: 'projects',
      role: 'This legacy',
      description: 'skooled app!',
      start_date: 2017,
      end_date: 2016,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 6,
      name: 'education',
      role: 'BS Chemistry',
      description: 'traveled the world too!',
      start_date: 2006,
      end_date: 2010,
      organization: 'University of Wisconsin-Madision'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user7
  .then((user) => {
    return models.Users.forge({
      full_name: 'Jeffrey Chen',
      vertical: 'Social',
      github_url: 'https://github.com/jeffc12',
      linkedin_url: 'https://www.linkedin.com/in/jeffrey-chen/',
      image: 'https://avatars1.githubusercontent.com/u/23188557?v=3&s=460',
      summary: 'I like waffles',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'jeffc12',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 19
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 9
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 7,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 7,
      name: 'professional',
      role: 'Undergraduate Researcher',
      description: 'Research',
      start_date: 2015,
      end_date: 2015,
      organization: 'University of Oregon'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 7,
      name: 'projects',
      role: 'Greenfield',
      description: 'Amazing app!',
      start_date: 2014,
      end_date: 2016,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 7,
      name: 'education',
      role: 'B.S. Physics',
      description: 'Hung out with basketball players',
      start_date: 2011,
      end_date: 2016,
      organization: 'University of Oregon'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user8
  .then((user) => {
    return models.Users.forge({
      full_name: 'Tom Dickson',
      vertical: 'Technology',
      github_url: 'https://github.com/t0mdicks0n',
      linkedin_url: 'https://www.linkedin.com/in/t0mdicks0n/',
      image: 'https://avatars1.githubusercontent.com/u/22496165?v=3&s=400',
      summary: 'I\'m an amazing software engineer' ,
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'tomdickson',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 10
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 8,
      tag_id: 16
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 8,
      name: 'professional',
      role: 'KAM and Business Development',
      description: 'Your Digital Mailbox!',
      start_date: 2013,
      end_date: 2017,
      organization: 'Kivra'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 8,
      name: 'projects',
      role: 'This legacy',
      description: 'Travel App',
      start_date: 2017,
      end_date: 2016,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 8,
      name: 'education',
      role: 'Student',
      description: 'BSc in Business, Finance',
      start_date: 2010,
      end_date: 2013,
      organization: 'Stockholm University'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user9
  .then((user) => {
    return models.Users.forge({
      full_name: 'Jon Eric Escobedo, E.I.T.',
      vertical: 'Technology',
      github_url: 'https://github.com/JonEricEscobedo',
      linkedin_url: 'https://www.linkedin.com/in/jonericescobedo/',
      image: 'https://avatars3.githubusercontent.com/u/22602434?v=3&s=460',
      summary: 'Project Manager with over five years of environmental experience advising environmental professionals in interpreting federal and state air regulatory guidelines and designing best in class customized plans to capture air pollutants for regulatory compliance demonstration. ',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'joneric',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 19
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 18
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 9,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 9,
      name: 'professional',
      role: 'Sales Engineer / Project Manager',
      description: 'Advise industrial professionals and engineers in interpreting federal and state air quality guidelines',
      start_date: 2012,
      end_date: 2016,
      organization: 'Enthalpy Analytical'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 9,
      name: 'projects',
      role: 'This Thesis',
      description: 'An app to write about product!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 9,
      name: 'education',
      role: 'B.S. Civil Engineering',
      description: '',
      start_date: 2004,
      end_date: 2009,
      organization: 'UC Davis'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user10
  .then((user) => {
    return models.Users.forge({
      full_name: 'Alexander Liang',
      vertical: 'Technology',
      github_url: 'https://github.com/axllgn',
      linkedin_url: 'https://www.linkedin.com/in/alliang/',
      image: 'https://avatars3.githubusercontent.com/u/17916893?v=3&s=400',
      summary: 'Looking for Full-Stack engineering opportunities',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'axllgn',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 9
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 10,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 10,
      name: 'professional',
      role: 'Manufacturing Quality Engineer',
      description: 'I like to test',
      start_date: 2016,
      end_date: 2016,
      organization: 'Fabrinet'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 10,
      name: 'projects',
      role: 'This greenfield',
      description: 'An app to test the product!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 10,
      name: 'education',
      role: 'Student',
      description: 'BS Mechnical Engineering & Material Science',
      start_date: 2009,
      end_date: 2013,
      organization: 'UC Davis'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user11
  .then((user) => {
    return models.Users.forge({
      full_name: 'Kriz Cortés',
      vertical: 'Technology',
      github_url: 'https://github.com/sirkortes',
      linkedin_url: 'https://www.linkedin.com/in/sirkortes/',
      image: 'https://avatars2.githubusercontent.com/u/5361945?v=3&s=460',
      summary: 'A graphic artist and web designer by day. A programming student by night, in pursuance of creating stunning applications for mobile devices and mixed reality platforms.',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'kriscortez',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 17
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 19
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 11,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 11,
      name: 'professional',
      role: 'Creative Head',
      description: 'I create visual elements that convey the brand\'s product, service and culture promptly and clear. This includes everything from Logos, Colors, Website, Social Media, Stationery, Advertisements and more.',
      start_date: 2013,
      end_date: null,
      organization: 'Strategic Graphic Design'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 11,
      name: 'projects',
      role: 'This legacy',
      description: 'An app to help manage people!',
      start_date: 2017,
      end_date: null,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 11,
      name: 'education',
      role: 'Student',
      description: 'Bachelors Graphic Design and Digital Animation',
      start_date: 2007,
      end_date: 2010,
      organization: 'Atlantic College'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user12
  .then((user) => {
    return models.Users.forge({
      full_name: 'Oliver Ullman',
      vertical: 'Technology',
      github_url: 'https://github.com/oriooctopus',
      linkedin_url: 'https://www.linkedin.com/in/oliver-ullman/',
      image: 'https://avatars0.githubusercontent.com/u/20331238?v=3&s=400',
      summary: 'I play piano',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'oriooctopus',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 12,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 12,
      name: 'professional',
      role: 'Freelance Web Developer',
      description: 'I build websites',
      start_date: 2016,
      end_date: 2017,
      organization: 'Upwork'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 12,
      name: 'projects',
      role: 'Greenfield',
      description: 'An app that makes music!',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 12,
      name: 'education',
      role: 'Student',
      description: 'Too cool for college',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user13
  .then((user) => {
    return models.Users.forge({
      full_name: 'Kara Marnell',
      vertical: 'Technology',
      github_url: 'https://github.com/kmarnell',
      linkedin_url: 'https://www.linkedin.com/in/karamarnell/',
      image: 'https://avatars0.githubusercontent.com/u/18540889?v=3&s=400',
      summary: 'I take pictures',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'kmarnell',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 13,
      tag_id: 16
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 13,
      name: 'professional',
      role: 'Genius Admin',
      description: 'Genius',
      start_date: 2014,
      end_date: null,
      organization: 'Apple'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 13,
      name: 'projects',
      role: 'Greenfield',
      description: 'Greenfield App',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 13,
      name: 'education',
      role: 'Student',
      description: 'BA Spanish Teaching Education',
      start_date: 2009,
      end_date: 2011,
      organization: 'College of Charleston'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user14
  .then((user) => {
    return models.Users.forge({
      full_name: 'Katheryn Wininger',
      vertical: 'Biomedical',
      github_url: 'https://www.linkedin.com/in/katheryn-wininger-614856b7/',
      linkedin_url: 'https://www.linkedin.com/in/kathrynwininger/',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJRAAAAJGJhZGI4ZjA5LTc0ZTItNDhhYi1hMGUyLWM2OTMzZjkzYzBhMg.jpg',
      summary: 'Resarch for Neuroscience Laboratories',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'kwining',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 14,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 14,
      tag_id: 5
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 14,
      tag_id: 10
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 14,
      tag_id: 12
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 14,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 14,
      name: 'professional',
      role: 'Research Technologist',
      description: 'Research in Neuroscience',
      start_date: 2012,
      end_date: 2016,
      organization: 'Mayo Clinic'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 14,
      name: 'projects',
      role: 'Western Blotting',
      description: 'Protein analysis for antidepressant and anti-anxiety mood research',
      start_date: 2017,
      end_date: 2017,
      organization: 'Neurochemical Lab'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 14,
      name: 'education',
      role: 'Student',
      description: 'PhD in Neurobiology of Disease',
      start_date: 2016,
      end_date: null,
      organization: 'Mayo Clinic Graduate School'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user15
  .then((user) => {
    return models.Users.forge({
      full_name: 'Seungleal (Brian) Paek',
      vertical: 'Biomedical',
      github_url: 'https://www.linkedin.com/in/seungleal-paek',
      linkedin_url: 'https://www.linkedin.com/in/seungleal-brian-paek-5a0530bb/',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUaAAAAJGU2MjU3OTc2LWJhZTYtNDBhOC1iZmNmLTBiNzg2MWI2MzVlNQ.jpg',
      summary: 'Doctoral Candidate',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'spaek',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 15,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 15,
      tag_id: 1
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 15,
      tag_id: 2
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 15,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 15,
      tag_id: 11
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 15,
      name: 'professional',
      role: 'Research Technologist',
      description: 'Research in Neuroscience',
      start_date: 2012,
      end_date: 2016,
      organization: 'Mayo Clinic'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 15,
      name: 'projects',
      role: 'Dopamine Reuptake for Parkinsons Disease',
      description: 'Changes in evoked dopamine output in basal ganglia structures of the brain',
      start_date: 2015,
      end_date: null,
      organization: 'Neural Engineering Lab'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 15,
      name: 'education',
      role: 'Doctorate in Neurobiology of Disease',
      description: 'PhD in Neurobiology of Disease',
      start_date: 2015,
      end_date: null,
      organization: 'Mayo Clinic Graduate School'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


  // user16
  .then((user) => {
    return models.Users.forge({
      full_name: 'Alfredo Oliveros',
      vertical: 'Biomedical',
      github_url: 'https://www.linkedin.com/in/alfredo-oliveros',
      linkedin_url: 'https://www.linkedin.com/in/alfredo-oliveros-2b632a83//',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnRAAAAJGZmOGZiMTE5LWE2OGItNDkxZS1iNTFiLWIyYjM1OThkYTliYQ.jpg',
      summary: 'Doctoral Candidate',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'aoli',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 16,
      tag_id: 2
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 16,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 16,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 16,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 16,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 16,
      name: 'professional',
      role: 'Data Analysis',
      description: 'Preclinical model research on neurobiology',
      start_date: 2009,
      end_date: 2013,
      organization: 'Mayo Clinic'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 16,
      name: 'projects',
      role: 'Western Blotting',
      description: 'Protein analysis of changes in neurochemical therepeutics',
      start_date: 2016,
      end_date: 2017,
      organization: 'Neurochemical Lab'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 16,
      name: 'education',
      role: 'Doctorate in Molecular Pharmacology',
      description: 'Learning and contributing to neurobiology research',
      start_date: 2013,
      end_date: 2017,
      organization: 'Mayo Clinic Graduate School'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user17
  .then((user) => {
    return models.Users.forge({
      full_name: 'Stanley Chen',
      vertical: 'Hardware',
      github_url: 'https://github.com/schen510',
      linkedin_url: 'https://www.linkedin.com/in/stanleychen1',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAJcAAAAJDIzNTVlZGUxLTU4MWUtNDQxMC04NjJjLWM4ODE2ZWQxZTVkMw.jpg',
      summary: 'Hardware Geek',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'schen',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 17,
      tag_id: 2
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 17,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 17,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 17,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 17,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 17,
      name: 'professional',
      role: 'Embedded SQA and Test Engineer',
      description: 'Perform Selenium automation using Python on the interface with the embedded system',
      start_date: 2016,
      end_date: null,
      organization: 'Sentient Energy'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 17,
      name: 'projects',
      role: 'Image Recognition Using FPGA Implementation',
      description: 'Designed a system on the Altera DE1-SoC board that allowed the onboard ARM A9 processor to communicate with the FPGA fabric to process images and predict what values were written on the image',
      start_date: 2016,
      end_date: 2016,
      organization: 'UC Davis'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 17,
      name: 'education',
      role: 'B.S. Electrical and Electronics Engineering',
      description: 'Cows Everywhere',
      start_date: 2013,
      end_date: 2017,
      organization: 'UC Davis'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user18
  .then((user) => {
    return models.Users.forge({
      full_name: 'Dennis Rong',
      vertical: 'Social',
      github_url: 'https://github.com/dennisrong',
      linkedin_url: 'https://www.linkedin.com/in/dennis-rong-ab275030/',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfCAAAAJDU4YTVhMGU3LThmZmEtNDEzMC05YTY3LTdjOWI2YzE0OTM0ZQ.jpg',
      summary: 'Product guy',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'drong',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 18,
      tag_id: 2
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 18,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 18,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 18,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 18,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 18,
      name: 'professional',
      role: 'Product Manager',
      description: 'Pinning things',
      start_date: 2017,
      end_date: null,
      organization: 'Pinterest'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 18,
      name: 'professional',
      role: 'Product Manager',
      description: 'Transactions, Growth, Search & Search UX',
      start_date: 2014,
      end_date: 2017,
      organization: 'Yelp'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })  
  .then((experience) => {
    return models.Experience.forge({
      users_id: 18,
      name: 'professional',
      role: 'Software Engineering Intern',
      description: 'Maps, Hadoop & Distributed Systems, Data Products',
      start_date: 2013,
      end_date: 2013,
      organization: 'Apple'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })    
  .then((experience) => {
    return models.Experience.forge({
      users_id: 18,
      name: 'projects',
      role: 'Pen Pal Android project',
      description: 'Pen Pal is an android application that will allow kids from around the world to meet and interact with each other. This app is designed to be kid-friendly through large buttons, a colorful design, and a basic user interface.',
      start_date: 2013,
      end_date: 2013,
      organization: 'UC Berkeley'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 18,
      name: 'education',
      role: 'B.A. Computer Science & Economics',
      description: 'Beta Alpha Psi',
      start_date: 2010,
      end_date: 2014,
      organization: 'UC Berkeley'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user19
  .then((user) => {
    return models.Users.forge({
      full_name: 'Orion Zhao',
      vertical: 'Enterprise Software/SaaS',
      github_url: 'https://github.com/orionzhao',
      linkedin_url: 'https://www.linkedin.com/in/orionzhao/',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/063/298/1c01f06.jpg',
      summary: 'People who are passionate about building something that people want should consider meeting this guy.',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'ozhao',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 19,
      tag_id: 2
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 19,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 19,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 19,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 19,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 19,
      name: 'professional',
      role: 'CEO, Co-founder',
      description: 'Trying to make the world a little bit better at www.mokahr.com',
      start_date: 2017,
      end_date: null,
      organization: 'MokaHR'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 19,
      name: 'professional',
      role: 'Software Engineer',
      description: 'Formerly known as GetAround',
      start_date: 2013,
      end_date: 2015,
      organization: 'Turo'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })  
  .then((experience) => {
    return models.Experience.forge({
      users_id: 19,
      name: 'professional',
      role: 'CEO, Co-founder',
      description: 'livingsimple.org LivingSimple is a exchange platform, with no money involved. (Trade your clutter for treasure)',
      start_date: 2014,
      end_date: 2014,
      organization: 'LivingSimple'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })    
  .then((experience) => {
    return models.Experience.forge({
      users_id: 19,
      name: 'projects',
      role: 'HackWall',
      description: 'Built a collaborative wall with post-it notes and drawings within a team of four in less than 24 hours for world finals',
      start_date: 2013,
      end_date: 2013,
      organization: 'Facebook Hackathon 2013'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 19,
      name: 'education',
      role: 'B.A. Computer Science',
      description: 'Beta Alpha Psi, Upsilon Pi Epsilon, Pi Alpha Phi',
      start_date: 2010,
      end_date: 2014,
      organization: 'UC Berkeley'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user20
  .then((user) => {
    return models.Users.forge({
      full_name: 'Vasu Srinivasan',
      vertical: 'Social',
      github_url: 'https://github.com',
      linkedin_url: 'https://www.linkedin.com/in/srinivasanvasu/',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAj4AAAAJDRkYTkwYmRlLTY5NGMtNGE4Ni05MmExLWE2ZTI2MTFjNzIyNA.jpg',
      summary: 'Software Engineer at Facebook',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'vasus',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 20,
      tag_id: 2
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 20,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 20,
      tag_id: 7
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 20,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 20,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 20,
      name: 'professional',
      role: 'Software Engineer',
      description: 'iOS development on Lifestage, College Communities',
      start_date: 2016,
      end_date: null,
      organization: 'Facebook'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 20,
      name: 'professional',
      role: 'Software Engineer Intern',
      description: 'web development for ads interfaces on business.facebook.com',
      start_date: 2015,
      end_date: 2015,
      organization: 'Facebook'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })  
  .then((experience) => {
    return models.Experience.forge({
      users_id: 20,
      name: 'projects',
      role: 'TickerWatch',
      description: 'Built TickerWatch, an online application that performs sentiment analysis on real-time Yahoo news articles to alert users of any events affecting their stock portfolio with sentiment values beyond a 2% threshold',
      start_date: 2014,
      end_date: 2014,
      organization: 'Calhacks'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 20,
      name: 'education',
      role: 'B.A. Computer Science',
      description: 'Beta Alpha Psi',
      start_date: 2012,
      end_date: 2016,
      organization: 'UC Berkeley'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  // user21
  .then((user) => {
    return models.Users.forge({
      full_name: 'Jinsoo Cha',
      vertical: 'Retail/E-Commerce',
      github_url: 'https://github.com/jinsoocha',
      linkedin_url: 'https://www.linkedin.com/in/jinsoocha/',
      image: 'https://avatars3.githubusercontent.com/u/17713849?v=3&s=400',
      summary: 'I am a software engineer in San Francisco with a career focus on front end architecture using modern Javascript frameworks such as React.',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'jcha',
      password: 'password'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 21,
      tag_id: 4
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 21,
      tag_id: 3
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 21,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 21,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 21,
      tag_id: 15
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 21,
      name: 'professional',
      role: 'Software Engineer',
      description: 'Front end focused web developer with some backend work',
      start_date: 2016,
      end_date: null,
      organization: 'Touch of Modern'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 21,
      name: 'professional',
      role: 'Analytics Representative',
      description: 'Support for Fixed Income & FX',
      start_date: 2015,
      end_date: 2016,
      organization: 'Bloomberg LP'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })  
  .then((experience) => {
    return models.Experience.forge({
      users_id: 21,
      name: 'projects',
      role: 'Sound.ly',
      description: 'Collaborative music streamer and visualizer.',
      start_date: 2016,
      end_date: 2016,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 21,
      name: 'education',
      role: 'B.A. Entrepreneurship',
      description: 'Dual Degree with SungKyunKwan University in Seoul, Korea',
      start_date: 2010,
      end_date: 2013,
      organization: 'Indiana University'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })

  //user22
  .then((user) => {
    return models.Users.forge({
      full_name: 'Apurva Shastry',
      vertical: 'Technology',
      github_url: 'https://github.com/shrimpwongton',
      linkedin_url: 'https://www.linkedin.com/in/anthonywg/',
      image: 'https://avatars0.githubusercontent.com/u/6591210?v=3&s=400',
      summary: 'Android Developer transitioning towards Full Stack Software Engineering.',
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create user');
    throw err;
  })
  .then((login) => {
    return models.Login.forge({
      username: 'shrimpwongton',
      password: 'password'
    }).save()
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 12
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 8
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 6
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 13
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .then((tag) => {
    return models.Users_tag.forge({
      users_id: 4,
      tag_id: 14
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create users_tag');
    throw err;
  })
  .error(err => {
    console.error('ERROR: failed to create login');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'professional',
      role: 'Andriod Developer',
      description: 'Java Baby',
      start_date: 2016,
      end_date: 2016,
      organization: 'DabKick'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'projects',
      role: 'Viator',
      description: 'Material UI',
      start_date: 2017,
      end_date: 2017,
      organization: 'Hack Reactor'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })
  .then((experience) => {
    return models.Experience.forge({
      users_id: 4,
      name: 'education',
      role: 'Student',
      description: 'BS Computer Science',
      start_date: 2012,
      end_date: 2016,
      organization: 'UC San Diego'
    }).save()
  })
  .error(err => {
    console.error('ERROR: failed to create experience');
    throw err;
  })


};




// copy users (id, full_name, vertical) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/users.csv' delimiter ',' csv header;

// copy connection (users_a_id, users_b_id, status) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/connection.csv' delimiter ',' csv header;

// copy experience (users_id, name, role, organization) to '/Users/rpk/development/github.com/prosperousPans/prosperousPans/db/migrations/csv-files/experience.csv' delimiter ',' csv header;




// copy users (id, full_name, vertical) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/users.csv' delimiter ',' csv header;

// copy connection (users_a_id, users_b_id, status) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/connection.csv' delimiter ',' csv header;

// copy experience (users_id, name, role, organization) to '/Users/rpk/Documents/Neo4j/default.graphdb/import/experience.csv' delimiter ',' csv header;
