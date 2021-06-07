// Copyright © VNG Realisatie 2020
// Licensed under the EUPL
//
import React, { useState } from 'react'
import Button from '../Button'
import { Drawer, withDrawerStack, useDrawerStack, StackedDrawer } from './index'

const drawerStory = {
  title: 'Components/Drawer',
  parameters: {
    componentSubtitle: 'Overlay providing contextual information.',
  },
  component: Drawer,
}

export default drawerStory

const LongContent = () => (
  <>
    <h2>Long content</h2>
    <p>
      Building mr concerns servants in he outlived am breeding. He so lain good
      miss when sell some at if. Told hand so an rich gave next. How doubt yet
      again see son smart. While mirth large of on front. Ye he greater related
      adapted proceed entered an. Through it examine express promise no. Past
      add size game cold girl off how old. Remain valley who mrs uneasy remove
      wooded him you. Her questions favourite him concealed. We to wife face
      took he. The taste begin early old why since dried can first. Prepared as
      or humoured formerly. Evil mrs true get post. Express village evening
      prudent my as ye hundred forming. Thoughts she why not directly reserved
      packages you. Winter an silent favour of am tended mutual. Savings her
      pleased are several started females met. Short her not among being any.
      Thing of judge fruit charm views do. Miles mr an forty along as he. She
      education get middleton day agreement performed preserved unwilling. Do
      however as pleased offence outward beloved by present. By outward neither
      he so covered amiable greater. Juvenile proposal betrayed he an informed
      weddings followed. Precaution day see imprudence sympathize principles. At
      full leaf give quit to in they up. In as name to here them deny wise this.
      As rapid woody my he me which. Men but they fail shew just wish next put.
      Led all visitor musical calling nor her. Within coming figure duck things
      are. Pretended concluded did repulsive education smallness yet yet
      described. Had country man his pressed shewing. No gate dare rose he. Eyes
      year if miss he as upon. Ferrars all spirits his imagine effects amongst
      neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use
      bred seen. Its dissimilar invitation ten has discretion unreserved. Had
      you him humoured jointure ask expenses learning. Blush on in jokes sense
      do do. Brother hundred he assured reached on up no. On am nearer missed
      lovers. To it mother extent temper figure better. Admiration stimulated
      cultivated reasonable be projection possession of. Real no near room ye
      bred sake if some. Is arranging furnished knowledge agreeable so. Red as
      smile up small. It honest chatty simple months turned oh at change of.
      Astonished set expression solicitude way admiration. In friendship
      diminution instrument so. Son sure paid door with say them. Two among sir
      sorry men court. Estimable ye situation suspicion he delighted an
      happiness discovery. Fact are size cold why had part. If believing or
      sweetness otherwise in we forfeited. Tolerably an unwilling arranging of
      determine. Beyond rather sooner so if up wishes or. For though result and
      talent add are parish valley. Songs in oh other avoid it hours woman
      style. In myself family as if be agreed. Gray collected son him knowledge
      delivered put. Added would end ask sight and asked saw dried house.
      Property expenses yourself occasion endeavor two may judgment she. Me of
      soon rank be most head time tore. Colonel or passage to ability. Brother
      set had private his letters observe outward resolve. Shutters ye marriage
      to throwing we as. Effect in if agreed he wished wanted admire expect. Or
      shortly visitor is comfort placing to cheered do. Few hills tears are
      weeks saw. Partiality insensible celebrated is in. Am offended as wandered
      thoughts greatest an friendly. Evening covered in he exposed fertile to.
      Horses seeing at played plenty nature to expect we. Young say led stood
      hills own thing get. Delightful remarkably mr on announcing themselves
      entreaties favourable. About to in so terms voice at. Equal an would is
      found seems of. The particular friendship one sufficient terminated
      frequently themselves. It more shed went up is roof if loud case. Delay
      music in lived noise an. Beyond genius really enough passed is up.
    </p>
  </>
)

export const Default = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [skipOpenAnimation, setSkipOpenAnimation] = useState(false)

  return (
    <article style={{ maxHeight: '500px' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Button onClick={() => setShowDrawer(true)}>Show Drawer</Button>

        <label style={{ marginLeft: '1rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            onChange={() => setSkipOpenAnimation(!skipOpenAnimation)}
            checked={skipOpenAnimation}
          />{' '}
          Skip open animation
        </label>
      </div>

      <p>
        The Drawer will become focused and the long content below will not be
        scrollable.
      </p>

      {showDrawer && (
        <Drawer
          skipOpenAnimation={skipOpenAnimation}
          closeHandler={() => setShowDrawer(false)}
        >
          <Drawer.Header title="Drawer title" />
          <Drawer.Content>
            <LongContent />
          </Drawer.Content>
        </Drawer>
      )}

      <LongContent />
    </article>
  )
}

export const Focus = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <article style={{ height: '250px' }}>
      <h1>Main title</h1>
      <Button onClick={() => setShowDrawer(true)}>Show Drawer</Button>

      <p>
        The input in Drawer is automaticaly focused by{' '}
        <code>data-autofocus</code> attribute.
      </p>

      {showDrawer && (
        <Drawer closeHandler={() => setShowDrawer(false)} autoFocus>
          <Drawer.Header title="Drawer title" />
          <Drawer.Content>
            <p>drawer content</p>
            <input data-autofocus />
          </Drawer.Content>
        </Drawer>
      )}
    </article>
  )
}

export const DrawerWithoutMask = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <article>
      <Button onClick={() => setShowDrawer(true)}>Show Drawer</Button>

      <p>The Drawer without mask.</p>

      <input
        defaultValue="Another focusable element"
        style={{ width: '200px' }}
      />

      {showDrawer && (
        <Drawer closeHandler={() => setShowDrawer(false)} noMask>
          <Drawer.Header title="Drawer title" />
          <Drawer.Content>
            <LongContent />
          </Drawer.Content>
        </Drawer>
      )}

      <LongContent />
    </article>
  )
}

export const StackedDrawers = withDrawerStack(() => {
  const { showDrawer } = useDrawerStack()
  const [skipOpenAnimation, setSkipOpenAnimation] = useState(false)
  const [noMask, setNoMask] = useState(false)

  return (
    <article style={{ maxHeight: '500px' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Button onClick={() => showDrawer('drawer1')}>Show Drawer</Button>

        <label style={{ marginLeft: '1rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            onChange={() => setSkipOpenAnimation(!skipOpenAnimation)}
            checked={skipOpenAnimation}
          />{' '}
          Skip open animation
        </label>

        <label style={{ marginLeft: '1rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            onChange={() => setNoMask(!noMask)}
            checked={noMask}
          />{' '}
          Without mask
        </label>
      </div>

      <p>
        Drawers can be stacked, using the <code>StackedDrawer</code> component.
      </p>
      <p>
        This also requires using the <code>withDrawerStack()</code> higher order
        component.
      </p>
      <p>See code example in docs for details.</p>

      <StackedDrawer
        id="drawer1"
        skipOpenAnimation={skipOpenAnimation}
        noMask={noMask}
      >
        <Drawer.Header title="Drawer title" />
        <Drawer.Content>
          <>
            <h2>Content in drawer</h2>
            <Button onClick={() => showDrawer('drawer2')}>
              Open child: drawer2
            </Button>{' '}
            <Button onClick={() => showDrawer('drawer3')}>
              Open child: drawer3
            </Button>
          </>

          <StackedDrawer id="drawer2" parentId="drawer1">
            <Drawer.Header title="Child - drawer2" />
            <Drawer.Content>
              <LongContent />
            </Drawer.Content>
          </StackedDrawer>

          <StackedDrawer id="drawer3" parentId="drawer1">
            <Drawer.Header title="Child - drawer3" />
            <Drawer.Content>
              <p>
                Multiple child drawers can point to the same parent. But only
                one can be visible of course.
              </p>
              <p>
                It's possible to directly open another child drawer. It will
                automatically close the one that is open.
              </p>

              <>
                <Button onClick={() => showDrawer('drawer2')}>
                  Open drawer2
                </Button>
                <br />
                <br />
                <p>It is even possible to go deeper...</p>
                <Button onClick={() => showDrawer('drawer4')}>
                  Dive down the rabbit hole
                </Button>
              </>

              <StackedDrawer id="drawer4" parentId="drawer3">
                <Drawer.Header title="Child of child - drawer4" />
                <Drawer.Content>
                  <p>We recommend not going deeper than 1 child though.</p>
                </Drawer.Content>
              </StackedDrawer>
            </Drawer.Content>
          </StackedDrawer>
        </Drawer.Content>
      </StackedDrawer>

      <LongContent />
    </article>
  )
})
