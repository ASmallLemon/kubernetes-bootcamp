$(function() {

	$('.content__trigger, .header__sider').on('click', function(){
		$('body').toggleClass('page_open');
	});

});

// Ractive quiz
$(function() {

	var quizMockData = [{
    text	: "At it's core, Kubernetes is a platform for:",
		answers : [{
			text		: 'Provisioning machines (simular to Puppet, Ansible)',
			note		: 'Kubernetes can schedule workloads on the cluster nodes, but is not a machine provisioning tool',
			isCorrect	:false 
		},{
			text		: 'Running and scheduling container applications on a cluster',
			note		: 'Kubernetes allows you to orchestrate and manage containers on distributed systems',
			isCorrect	: true
		},{
			text		: "Packaging software in containers",
			note		: "The tool you’ll use to package your software will be Docker or rkt",
			isCorrect	: false
		}],
	},{
    text	: 'In kubernetes, a node is:"
		answers : [{
			text		: 'Answer 1',
			note		: 'Note for answer 1',
			isCorrect	: false
		},{
			text		: 'Answer 2',
			note		: 'Note for answer 2',
			isCorrect	: false
		},{
			text		: 'Answer 3',
			note		: 'Note for answer 3',
			isCorrect	: true
		}],
	},{
		text	: 'Question 3 text text text',
		answers : [{
			text		: 'Answer 1',
			note		: 'Note for answer 1',
			isCorrect	: true
		},{
			text		: 'Answer 2',
			note		: 'Note for answer 2',
			isCorrect	: false
		},{
			text		: 'Answer 3',
			note		: 'Note for answer 3',
			isCorrect	: false
		}],
	}]

	var template = '<div class="quiz">\
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
							<div class="carousel-inner" role="listbox">\
								{{#each questions:i}}\
								<div class="item {{ i === 0 ? "active" : "" }}">\
									<div class="row">\
										<div class="col-md-12">\
											<h2>Question {{ i }}</h2>\
											<p>{{ text }}</p>\
											<p style="color: #3771e3;"><i><big>Select one answer</big></i></p>\
										</div>\
									</div>\
									<div class="quiz__list {{ answered ? "quiz__list_open" : "" }}">\
										{{#each answers:j}}\
										<div class="quiz__var {{ isCorrect	? "quiz__var_true" : "quiz__var_false" }} {{ answered ? "quiz__var_open" : "" }}">\
											<div class="quiz__box">{{ text }}</div>\
											<div class="quiz__note">{{ note }}</div>\
										</div>\
										{{/each}}\
									</div>\
								</div>\
								{{/each}}\
							</div>\
							<ol class="carousel-indicators">\
								<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>\
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>\
							</ol>\
							<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
								<span class="sr-only">Previous</span>\
							</a>\
							<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
								<span class="sr-only">Next</span>\
							</a>\
						</div>\
					</div>';

	var ractive = new Ractive({
		el: '#quizTest',
		template: template,
		data: {
			questions: quizMockData
		}
	});

	$('.quiz__var').on('click', function(){
		var thisVar = $(this);
		if (!thisVar.parents().hasClass('quiz__list_open')) {
			thisVar.addClass('quiz__var_open').closest('.quiz__list').addClass('quiz__list_open');;
		}
	});

	$('.carousel').carousel({
		interval: false
	})

});
