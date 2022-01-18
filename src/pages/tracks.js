import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Layout, QueryResult } from '../components'
import TrackCard from '../containers/track-card'

export const TRACKS = gql`
  query getTracks {
    tracks {
      id
      title
      thumbnail
      durationInSeconds
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  )
}

export default Tracks
