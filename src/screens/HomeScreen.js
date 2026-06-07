import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { COLORS, TEAM_DATA } from "../data/teamData";

export default function HomeScreen() {
  const showTeamInfo = () => {
    Alert.alert(
      TEAM_DATA.nickname,
      `${TEAM_DATA.name}\n\nFundado en ${TEAM_DATA.founded}\nConfederación: ${TEAM_DATA.confederation}\nRanking FIFA: #${TEAM_DATA.fifaRanking}\nEntrenador: ${TEAM_DATA.headCoach}\nEstadio: ${TEAM_DATA.stadium}`,
      [{ text: "¡Vamos Ecuador!" }]
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.blue} />
      <View style={styles.header}>
        <Image source={require("../../assets/Ecuador.png")} style={styles.headerLogo} />
        <Text style={styles.headerTitle}>{TEAM_DATA.nickname}</Text>
        <Text style={styles.headerSubtitle}>{TEAM_DATA.name}</Text>
      </View>

      <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información General</Text>
          <InfoRow label="Fundación" value={`${TEAM_DATA.founded}`} />
          <InfoRow label="Confederación" value={TEAM_DATA.confederation} />
          <InfoRow label="Ranking FIFA" value={`#${TEAM_DATA.fifaRanking}`} />
          <InfoRow label="Director Técnico" value={TEAM_DATA.headCoach} />
          <InfoRow label="Capitán" value={TEAM_DATA.captain} />
          <InfoRow label="Estadio" value={TEAM_DATA.stadium} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Récords</Text>
          <InfoRow label="Máximo Goleador" value={TEAM_DATA.topScorer} />
          <InfoRow label="Más Partidos" value={TEAM_DATA.mostCaps} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Logros</Text>
          {TEAM_DATA.achievements.map((item, index) => (
            <View key={index} style={styles.achievementItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.achievementText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.description}>{TEAM_DATA.description}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={showTeamInfo}>
          <Text style={styles.buttonText}>Ver información del equipo</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.blue,
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerLogo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.yellow,
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.white,
    marginTop: 4,
    opacity: 0.9,
  },
  body: {
    flex: 1,
  },
  bodyContent: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    backgroundColor: COLORS.gray,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.blue,
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.yellow,
    paddingBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    color: COLORS.darkGray,
    flex: 1,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,
    flex: 1,
    textAlign: "right",
  },
  achievementItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 4,
  },
  bullet: {
    fontSize: 16,
    color: COLORS.red,
    marginRight: 8,
    marginTop: -1,
  },
  achievementText: {
    fontSize: 14,
    color: COLORS.black,
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: COLORS.darkGray,
    lineHeight: 22,
    textAlign: "justify",
  },
  button: {
    backgroundColor: COLORS.blue,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 4,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: COLORS.yellow,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
