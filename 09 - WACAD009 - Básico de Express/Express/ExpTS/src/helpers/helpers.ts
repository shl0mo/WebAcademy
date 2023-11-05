import { Technology } from './helpersTypes'
import Handlebars from 'handlebars'

export function listTechnologies(technologies: Technology[]) {
	const list = technologies.map((technology) => `<li>${technology.name} - ${technology.type} - ${technology.poweredByNodejs}</li>`)	
	return new Handlebars.SafeString(`<ul>${list.join('')}</ul>`)
}
