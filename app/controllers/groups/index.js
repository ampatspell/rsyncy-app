import Ember from 'ember';

export default Ember.Controller.extend({

  checked: true,

  actions: {
    showProject(project) {
      this.transitionToRoute('projects.project', project);
    },
    showGroup(group) {
      this.transitionToRoute('groups.group', group);
    }
  }

})
