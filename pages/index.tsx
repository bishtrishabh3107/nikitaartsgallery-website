import FirstScreen from '../components/element/MainScreen/FirstScreen';
import FourthScreen from '../components/element/MainScreen/FourthScreen';
import SecondScreen from '../components/element/MainScreen/SecondScreen';
import ThirdScreen from '../components/element/MainScreen/ThirdScreen';
import MobileFirstSectionScreen from '../components/element/MobileFirstSectionScreen/MobileFirstSectionScreen';
import BestSeller from 'components/element/MainScreen/BestSeller';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <BestSeller />
      <MobileFirstSectionScreen />
      <section id="FirstScreen">
        <FirstScreen />
      </section>
      <section id="SecondScreen">
        <SecondScreen />
      </section>
      <section id="ThirdScreen">
        <ThirdScreen />
      </section>
      <section id="FourthScreen">
        <FourthScreen />
      </section>
    </motion.div>
  );
}
