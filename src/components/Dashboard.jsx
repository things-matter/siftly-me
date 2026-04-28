import { useState } from 'react'
import catFood from '../assets/photos/cat-food.jpg?as=picture&format=avif;webp;jpg&w=120;240'
import catFood2 from '../assets/photos/cat-food-2.jpg?as=picture&format=avif;webp;jpg&w=120;240'
import catFood3 from '../assets/photos/cat-food-3.jpg?as=picture&format=avif;webp;jpg&w=120;240'
import catFood4 from '../assets/photos/cat-food-4.jpg?as=picture&format=avif;webp;jpg&w=120;240'
import catFood5 from '../assets/photos/cat-food-5.jpg?as=picture&format=avif;webp;jpg&w=120;240'
import catFood6 from '../assets/photos/cat-food-6.jpg?as=picture&format=avif;webp;jpg&w=120;240'
import Picture from './Picture.jsx'

const ACTIVITY_THUMB_SIZES = '80px'
const ACTIVITY_THUMBS = [catFood6, catFood4, catFood2]
const FOOD_GRID_SIZES = '90px'
const FOOD_GRID = [catFood6, catFood4, catFood2, catFood5, catFood, catFood3]

const ChevIcon = () => (
  <svg className="chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4"/></svg>
)

const CheckIcon = () => (
  <span className="check">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10"/></svg>
  </span>
)

const PHOTO_CATEGORIES = [
  { name: 'Animal',   count: '7 photos',  open: false, on: false, thumbs: [] },
  { name: 'Building', count: '4 photos',  open: false, on: false, thumbs: [] },
  { name: 'Document', count: '5 photos',  open: false, on: false, thumbs: [] },
  { name: 'Food',     count: '12 photos', open: true,  on: true,  thumbs: FOOD_GRID, status: 'SYNCED' },
]

function CatRow({ name, count, open, on, status, thumbs }) {
  return (
    <div className="cat-row">
      <div className={`cat-head${open ? ' open' : ''}`}>
        <div className="left">
          <ChevIcon />
          <span><span className="cname">{name}</span><span className="ccount">{count}</span></span>
        </div>
        <div className="right">
          {status && <span className="cat-status">{status}</span>}
          <div className={`switch small${on ? '' : ' off'}`}></div>
        </div>
      </div>
      {open && thumbs.length > 0 && (
        <div className="cat-thumbs grid">
          {thumbs.map((image, i) => (
            <div key={i} className="cat-thumb">
              <Picture image={image} alt="" loading="lazy" sizes={FOOD_GRID_SIZES} />
              <CheckIcon />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Dashboard() {
  const [tab, setTab] = useState('home')
  const [backupOn, setBackupOn] = useState(true)

  return (
    <section id="dashboard" className="reveal">
      <div className="wrap">
        <div className="showcase">
          <div className="copy">
            <div className="eyebrow">the app</div>
            <h2>A dashboard that <em>tells you one thing:</em> how much space we kept out of your cloud.</h2>
            <p>A single number. A smart-backup switch. A storage-health gauge that climbs as you sift. That's most of it.</p>
            <ul>
              <li><span className="tag">A.</span>Smart Sifting Status — megabytes kept local this week</li>
              <li><span className="tag">B.</span>Smart backup — one switch to let Siftly work in the background</li>
              <li><span className="tag">C.</span>Storage Health — live split of what's local vs. in the cloud</li>
              <li><span className="tag">D.</span>Sifting Activity — categories synced, at a glance</li>
              <li><span className="tag">E.</span>Home and Photos — two tabs, nothing buried</li>
            </ul>
          </div>

          <div className="phone-wrap">
            <div className="phone" id="siftlyPhone">
              <div className="screen">
                <div className="status-bar">
                  <span>5:15</span>
                  <span className="icons" style={{ marginLeft: 'auto' }}>
                    <svg viewBox="0 0 16 12" fill="currentColor" aria-hidden="true"><path d="M8 1C5.5 1 3.2 1.9 1.5 3.4l1.2 1.3A7.5 7.5 0 0 1 8 2.6c2 0 3.8.7 5.3 2l1.2-1.2A9 9 0 0 0 8 1Zm0 3.3c-1.6 0-3 .6-4.1 1.5l1.2 1.3A4.5 4.5 0 0 1 8 5.8c1.1 0 2.2.4 3 1.1l1.2-1.2A6 6 0 0 0 8 4.3Zm0 3.2a2.3 2.3 0 0 0-1.8.8L8 11.1l1.8-2.7A2.3 2.3 0 0 0 8 7.5Z"/></svg>
                    <svg viewBox="0 0 14 12" fill="currentColor" aria-hidden="true"><path d="M0.5 11 13 0.5 13 11Z"/></svg>
                    <svg viewBox="0 0 30 14" fill="none" aria-hidden="true">
                      <rect x="1" y="1" width="22" height="12" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                      <rect x="3" y="3" width="18" height="8" rx="1.5" fill="currentColor"/>
                      <rect x="24" y="4.5" width="2" height="5" rx="0.6" fill="currentColor"/>
                      <path d="M13.5 3.5l-2 4h2l-1 3 3.5-4.2h-2.2z" fill="#0a0907"/>
                    </svg>
                  </span>
                </div>

                <div className={`screen-view ${tab === 'home' ? 'active' : ''}`} data-view="home">
                  <div className="app-head">
                    <div className="brand-block">
                      <h3>Siftly</h3>
                      <p className="tagline">Your photos, <em>effortlessly safe</em></p>
                    </div>
                    <div className="gear" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
                    </div>
                  </div>

                  <div className="sifting-card">
                    <div className="radar" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
                    <div className="kicker">SMART SIFTING STATUS</div>
                    <div className="big">2.8<span className="unit">MB</span></div>
                    <div className="sub">kept out of your cloud</div>
                    <div className="weekrow">
                      <div className="weekbars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                      <div className="weeklabel">
                        <span className="plus">+2.8 MB this week</span>
                        <span className="days">7-day savings</span>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="backup-row">
                      <div className="left">
                        <svg className="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z"/><path d="M9 12l2 2 4-4"/></svg>
                        <span className="label">Smart backup</span>
                      </div>
                      <div
                        className={`switch ${backupOn ? '' : 'off'}`}
                        role="switch"
                        aria-checked={backupOn ? 'true' : 'false'}
                        onClick={() => setBackupOn(v => !v)}
                      ></div>
                    </div>
                  </div>

                  <div className="mini-row">
                    <div className="mini-card">
                      <h4>Sifting Activity</h4>
                      <div className="sub">3 categories synced</div>
                      <div className="activity-thumbs">
                        {ACTIVITY_THUMBS.map((image, i) => (
                          <div key={i} className="activity-thumb">
                            <Picture image={image} alt="" loading="lazy" sizes={ACTIVITY_THUMB_SIZES} />
                          </div>
                        ))}
                      </div>
                      <div className="activity-label">Food</div>
                      <div className="activity-dots" aria-hidden="true">
                        <i className="active"></i><i></i><i></i>
                      </div>
                    </div>
                    <div className="mini-card">
                      <h4>Storage Health</h4>
                      <div className="sub">Kept Local</div>
                      <div className="gauge">
                        <svg viewBox="0 0 120 64" aria-hidden="true">
                          <path className="track" d="M12 58 A48 48 0 0 1 108 58" fill="none" strokeWidth="10" strokeLinecap="round"/>
                          <path className="fill" d="M12 58 A48 48 0 0 1 108 58" fill="none" strokeWidth="10" strokeLinecap="round" pathLength="100" strokeDasharray="49 100"/>
                        </svg>
                        <span className="pct">49%</span>
                      </div>
                      <div className="legend"><span><i></i>Local</span><span><i className="cloud"></i>Cloud</span></div>
                    </div>
                  </div>

                  <div className="pill-row">
                    <div className="pill-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M3 16l5-4 4 3 3-3 6 5"/></svg>
                      <span className="count">58 photos</span>
                    </div>
                    <div className="pill-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><path d="M9 13l2 2 4-4"/></svg>
                      <span className="count">30 synced</span>
                    </div>
                  </div>
                  <div className="last-synced">Last synced 1:17 PM</div>
                </div>

                <div className={`screen-view ${tab === 'photos' ? 'active' : ''}`} data-view="photos">
                  <div className="app-head photos-head">
                    <div className="brand-block">
                      <h3>Photos</h3>
                      <p className="tagline"><em>Manage your sync by category</em></p>
                    </div>
                  </div>
                  <div className="tip-banner">
                    <svg className="tip-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"/><path d="M19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13z"/></svg>
                    <p><strong>Long press</strong> any photo to correct its category — Siftly learns from you</p>
                    <button type="button" className="tip-close" aria-label="Dismiss tip">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>
                    </button>
                  </div>
                  <div className="cats-list">
                    {PHOTO_CATEGORIES.map((c) => <CatRow key={c.name} {...c} />)}
                  </div>
                </div>

                <div className="nav-tab" id="phoneNav">
                  <span
                    data-tab="home"
                    className={tab === 'home' ? 'active' : ''}
                    onClick={() => setTab('home')}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="7" height="7" rx="1.4"/><rect x="13" y="4" width="7" height="7" rx="1.4"/><rect x="4" y="13" width="7" height="7" rx="1.4"/><rect x="13" y="13" width="7" height="7" rx="1.4"/></svg>
                    Home
                  </span>
                  <span
                    data-tab="photos"
                    className={tab === 'photos' ? 'active' : ''}
                    onClick={() => setTab('photos')}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M3 17l5-4 4 3 3-3 6 5"/></svg>
                    Photos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
