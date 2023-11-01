'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  button,
  container,
  fieldset,
  input,
  label,
  legend,
  nestedFieldset,
  select,
  sidebarWrapper,
  span,
  video,
  title,
  description,
  savebutton,
  lastInputLabel,
} from './sidebar.css'
import { useSearchParams, useRouter } from 'next/navigation'
import { TContent } from '../update/page'

import { deleteProperty, getProperty, setProperty } from 'dot-prop'
import { useRecord } from './useRecord'

export const Sidebar = ({}) => {
  const record = useRecord()
  const router = useRouter()
  const searchParams = useSearchParams()
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentParam = searchParams.get('content') || '{}'
  const [formState, setFormState] = useState<TContent>(JSON.parse(contentParam ?? '{}'))
  const [newFormState, setNewFormState] = useState<TContent>(JSON.parse(contentParam ?? '{}'))
  const [isProfileState, setProfileStateTo] = useState(false)

  const submitNewState = useCallback(() => {
    router.replace('/update/?content=' + JSON.stringify(newFormState))
    setFormState({
      ...newFormState,
    })
  }, [router, newFormState])

  const setContentType = useCallback(
    (value: string) => {
      setProfileStateTo(value === '1' ? true : false)
      const contentType = value === '1' ? 'profile' : 'summary'
      setProperty(newFormState, 'contentType', contentType)
      setNewFormState({
        ...newFormState,
        contentType,
      })
      submitNewState()
    },
    [setProfileStateTo, newFormState, setNewFormState, submitNewState]
  )

  const initSetInput = useCallback(
    (name: keyof TContent) => {
      try {
        const newSet = [
          ...new Set([
            ...(formState[name] as any),
            {
              image: '',
              name: '',
              title: '',
              account: '',
            },
          ]),
        ].filter((d) => d)

        setProperty(newFormState, name, newSet)

        setNewFormState({
          ...newFormState,
        })

        submitNewState()
      } catch (error) {
        console.error('First save the form')
      }
    },
    [formState, newFormState, submitNewState]
  )

  const setInput = useCallback(
    (name: string, value: string) => {
      value = value.includes('#') ? value.replaceAll('#', '') : value

      if (name.includes('.') || name.includes('[')) {
        if (name.includes('[')) {
          if (value) {
            setProperty(newFormState, name, value)
          } else {
            deleteProperty(newFormState, name)
            const [parentKey] = name.split('[')
            const parentValue: any[] = getProperty(newFormState, parentKey)
            setProperty(newFormState, parentKey, [...new Set([...parentValue.filter((d) => d)])])
          }
          setNewFormState({
            ...newFormState,
          })

          return
        }

        setProperty(newFormState, name, value)

        setNewFormState({
          ...newFormState,
        })

        return
      }

      setNewFormState({
        ...newFormState,
        [name]: value,
      })
    },
    [newFormState, setNewFormState]
  )

  const unsetInput = useCallback(
    (name: string) => {
      const formStateObj = { ...formState }

      if (name.includes('[')) {
        deleteProperty(formStateObj, name)
        const [parentKey] = name.split('[')
        const parentValue: any[] = getProperty(formStateObj, parentKey)

        setProperty(formStateObj, parentKey, [...new Set([...parentValue.filter((d) => d)])])
      }

      setNewFormState({
        ...formStateObj,
      })
    },
    [formState, setNewFormState]
  )

  useEffect(() => {
    setProfileStateTo(!!formState.profile)
  }, [formState, setProfileStateTo])

  useEffect(() => {
    // console.log('RECORD_____', record)

    if (record.blobUrl && videoRef.current) {
      videoRef.current.src = record.blobUrl
    }
  }, [record.blobUrl])

  return (
    <div id="sidebar" className={sidebarWrapper}>
      <h1 className={title}>Post content</h1>
      <p className={description}>Fill in your post details and apply changes to see the updates.</p>
      <div className={container}>
        <select
          className={select}
          defaultValue={formState.contentType === 'profile' ? '1' : '0'}
          onChange={(value) => setContentType(value.currentTarget.value)}
        >
          <option value="1">Profile (content with avatars/social accounts)</option>
          <option value="0">Summary (text based post)</option>
        </select>
        <select
          className={select}
          defaultValue={formState.theme}
          onChange={(value) => setInput('theme', value.currentTarget.value)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <label className={label}>
          <span className={span}>Title</span>
          <input
            className={input}
            defaultValue={formState.title}
            onChange={(e) => setInput('title', e.currentTarget.value)}
          />
        </label>
        <label className={label}>
          <span className={span}>Subtitle</span>
          <input
            className={input}
            defaultValue={formState.subtitle}
            onChange={(e) => setInput('subtitle', e.currentTarget.value)}
          />
        </label>
        <label className={[label, lastInputLabel].join(' ')}>
          <span className={span}>Sequence (e.g. 2.1.0)</span>
          <input
            className={input}
            defaultValue={formState.seqUpdate}
            onChange={(e) => setInput('seqUpdate', e.currentTarget.value)}
          />
        </label>
        {formState.contentType === 'profile' ? (
          <fieldset className={fieldset}>
            <legend className={legend}>Profiles</legend>

            {formState.profile?.map((profile, index: number) => {
              if (!formState.profile || !profile) return <></>

              return (
                <fieldset className={[fieldset, nestedFieldset].join(' ')} key={`profile-${index}`}>
                  <legend className={legend}>Profile {index + 1}</legend>

                  <label className={label}>
                    <span className={span}>image</span>
                    <input
                      className={input}
                      defaultValue={formState.profile[index].image}
                      onChange={(e) => setInput(`profile[${index}].image`, e.currentTarget.value)}
                    />
                  </label>
                  <label className={label}>
                    <span className={span}>Name</span>
                    <input
                      className={input}
                      defaultValue={formState.profile[index].name}
                      onChange={(e) => setInput(`profile[${index}].name`, e.currentTarget.value)}
                    />
                  </label>
                  <label className={label}>
                    <span className={span}>Title</span>
                    <input
                      className={input}
                      defaultValue={formState.profile[index].title}
                      onChange={(e) => setInput(`profile[${index}].title`, e.currentTarget.value)}
                    />
                  </label>
                  <label className={label}>
                    <span className={span}>Social Account</span>
                    <input
                      className={input}
                      defaultValue={formState.profile[index].account}
                      onChange={(e) => setInput(`profile[${index}].account`, e.currentTarget.value)}
                    />
                  </label>
                  <button className={button} onClick={() => unsetInput(`profile[${index}]`)}>
                    Remove Profile
                  </button>
                </fieldset>
              )
            })}
            {(!formState.profile || !formState.profile?.filter((d) => d).length) && (
              <fieldset className={[fieldset, nestedFieldset].join(' ')} key={`profile-0`}>
                <legend className={legend}>New Profile</legend>

                <label className={label}>
                  <span className={span}>Image</span>
                  <input
                    className={input}
                    defaultValue={''}
                    onChange={(e) => setInput(`profile[0].image`, e.currentTarget.value)}
                  />
                </label>
                <label className={label}>
                  <span className={span}>Name</span>
                  <input
                    className={input}
                    defaultValue={''}
                    onChange={(e) => setInput(`profile[0].name`, e.currentTarget.value)}
                  />
                </label>
                <label className={label}>
                  <span className={span}>Title</span>
                  <input
                    className={input}
                    defaultValue={''}
                    onChange={(e) => setInput(`profile[0].title`, e.currentTarget.value)}
                  />
                </label>
                <label className={label}>
                  <span className={span}>Social Account</span>
                  <input
                    className={input}
                    defaultValue={''}
                    onChange={(e) => setInput(`profile[0].account`, e.currentTarget.value)}
                  />
                </label>
              </fieldset>
            )}
            <button className={button} onClick={() => initSetInput(`profile`)}>
              Add Profile
            </button>
          </fieldset>
        ) : (
          <fieldset className={fieldset}>
            <legend className={legend}>Summary</legend>
            <label className={label}>
              <span className={span}>Title</span>
              <input
                className={input}
                defaultValue={formState.footer?.title}
                onChange={(e) => setInput('footer.title', e.currentTarget.value)}
              />
            </label>
            <label className={label}>
              <span className={span}>Subtitle</span>
              <input
                className={input}
                defaultValue={formState.footer?.subtitle}
                onChange={(e) => setInput('footer.subtitle', e.currentTarget.value)}
              />
            </label>
          </fieldset>
        )}

        <fieldset className={fieldset}>
          <legend className={legend}>Links</legend>
          <label key={`link-0`} className={label}>
            <span className={span}>Link</span>
            <input
              className={input}
              defaultValue={formState.links ? formState.links[0] : ''}
              onChange={(e) => setInput(`links[0]`, e.currentTarget.value)}
            />
          </label>
          <label key={`link-1`} className={label}>
            <span className={span}>Link</span>
            <input
              className={input}
              defaultValue={formState.links ? formState.links[1] : ''}
              onChange={(e) => setInput(`links[1]`, e.currentTarget.value)}
            />
          </label>
          <label key={`link-2`} className={label}>
            <span className={span}>Link</span>
            <input
              className={input}
              defaultValue={formState.links ? formState.links[2] : ''}
              onChange={(e) => setInput(`links[2]`, e.currentTarget.value)}
            />
          </label>
        </fieldset>

        <fieldset className={fieldset}>
          <legend className={legend}>Tags</legend>
          <label key={`tag-0`} className={label}>
            <span className={span}>Tag</span>
            <input
              className={input}
              defaultValue={formState.tags ? formState.tags[0] : ''}
              onChange={(e) => setInput(`tags[0]`, e.currentTarget.value)}
            />
          </label>
          <label key={`tag-1`} className={label}>
            <span className={span}>Tag</span>
            <input
              className={input}
              defaultValue={formState.tags ? formState.tags[1] : ''}
              onChange={(e) => setInput(`tags[1]`, e.currentTarget.value)}
            />
          </label>
          <label key={`tag-2`} className={label}>
            <span className={span}>Tag</span>
            <input
              className={input}
              defaultValue={formState.tags ? formState.tags[2] : ''}
              onChange={(e) => setInput(`tags[2]`, e.currentTarget.value)}
            />
          </label>
        </fieldset>

        {/* 
        {!record.video ? (
          <button className={button} onClick={() => record.start(videoRef.current)}>
            Record
          </button>
        ) : (
          <>
            <button className={button} onClick={() => record.stop(videoRef.current)}>
              Stop Recording
            </button>
          </>
        )}
        <video id="video" ref={videoRef} controls className={video}></video> */}
      </div>

      <button
        className={[button, savebutton].join(' ')}
        onClick={() => {
          const newW = window.open(window.location.href + '&sidebar=false', 'detab', 'toolbar=0')
          newW!.document.title = 'Record this window'
        }}
      >
        Preview ↗️
      </button>
      <br />
      <button className={[button, savebutton].join(' ')} onClick={() => submitNewState()}>
        Save changes
      </button>
    </div>
  )
}
