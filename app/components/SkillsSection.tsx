import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Artificial Intelligence & Machine Learning',
							skills: ['Deep Learning', 'Machine Learning', 'Interpretability', 'Feature Engineering', 'Data Augmentation', 'Time Series']
						},
						{
							category: 'Programming Languages',
							skills: ['Python', 'Java', 'JavaScript']
						},
						{
							category: 'Tools & Other Expertise',
							skills: ['Web Development', 'LaTeX', 'Mathematics', 'Research']
						}
					].map((section, idx) => (
						<div key={idx} className="bg-[#0D1117] p-6 rounded-lg shadow-lg border border-gray-800">
							<h3 className="text-xl font-semibold mb-4">{section.category}</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-300">
								{section.skills.map((skill, i) => (
									<li key={i}>{skill}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};