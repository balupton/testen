import test from 'ava'
import execa from 'execa'

test('main', async t => {
	const {stdout} = await execa.shell(
		'node testen -n 4.2.4 ' +
		(process.env.TEST_ENV === 'nvm' ? '--nvm ' : '') +
		'-- ls .'
	)
	t.true(stdout.indexOf('test.js') > -1)
})
