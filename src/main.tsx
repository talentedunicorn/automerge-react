import React from 'react'
import ReactDOM from 'react-dom/client'
import { isValidAutomergeUrl, Repo } from '@automerge/automerge-repo'
import { BroadcastChannelNetworkAdapter } from '@automerge/automerge-repo-network-broadcastchannel'
import { IndexedDBStorageAdapter } from '@automerge/automerge-repo-storage-indexeddb'
import { next as A } from '@automerge/automerge'
import { RepoContext } from '@automerge/automerge-repo-react-hooks'
import App from './App.tsx'
import './index.css'

// Create automerge repo
const repo = new Repo({
  network: [new BroadcastChannelNetworkAdapter()],
  storage: new IndexedDBStorageAdapter(),
})

const rootDocUrl = `${document.location.hash.substring(1)}`
let handle;

if (isValidAutomergeUrl(rootDocUrl)) {
  handle = repo.find(rootDocUrl)
} else {
  handle = repo.create<{ counter: A.Counter }>()
  handle.change(d => (d.counter = new A.Counter(0)))
}

const docUrl = (document.location.hash = handle.url)
// Bind handle to window
// window.handle = handle

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RepoContext.Provider value={repo}>
      <App docUrl={docUrl} />
    </RepoContext.Provider>
  </React.StrictMode>,
)
