
import express from 'express'

import config from '../src/assets/config.json' assert {type: 'json'}
import packageJson from './../../package.json' assert {type: 'json'}

async function prepContainer () {

  return {
    version: packageJson.version
  }

}

class Controller {

  async Config (req, res) {
    const t1   = Date.now()
    const container = await prepContainer(config, req.query)
    container.meta.response_time = Date.now() - t1
    return res.json(container)
  }
}

const router = express.Router()
const controller = new Controller()

router.get('/config',            controller.Config)

export default router
