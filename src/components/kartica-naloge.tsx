import { Pressable, StyleSheet, Text, View } from 'react-native';

import { barve, pisava, polmeri, razmiki } from '@/theme';

type KarticaNalogeProps = {
  ime: string;
  cas: string;
  opravljeno: boolean;
  onPrepni: () => void;
  onOdstrani: () => void;
};

export function KarticaNaloge({
  ime,
  cas,
  opravljeno,
  onPrepni,
  onOdstrani,
}: KarticaNalogeProps) {
  return (
    <View style={[styles.kartica, opravljeno && styles.karticaOpravljena]}>
      <Pressable style={styles.vsebina} onPress={onPrepni}>
        <View style={[styles.kljukica, opravljeno && styles.kljukicaAktivna]}>
          {opravljeno && <Text style={styles.kljukicaZnak}>✓</Text>}
        </View>
        <View style={styles.besedila}>
          <Text style={[styles.ime, opravljeno && styles.imePrecrtano]}>{ime}</Text>
          <Text style={styles.cas}>{cas}</Text>
        </View>
      </Pressable>
      <Pressable onPress={onOdstrani} hitSlop={8}>
        <Text style={styles.odstrani}>Odstrani</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  kartica: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: barve.povrsina,
    borderWidth: 1,
    borderColor: barve.obroba,
    borderRadius: polmeri.m,
    padding: razmiki.m,
    marginBottom: razmiki.s,
  },
  karticaOpravljena: {
    backgroundColor: barve.primarnaSvetla,
  },
  vsebina: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: razmiki.m,
  },
  kljukica: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: barve.primarna,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kljukicaAktivna: {
    backgroundColor: barve.primarna,
  },
  kljukicaZnak: {
    color: barve.bela,
    fontSize: 14,
    fontWeight: '700',
  },
  besedila: {
    flex: 1,
  },
  ime: {
    fontSize: pisava.besedilo,
    fontWeight: '600',
    color: barve.besedilo,
  },
  imePrecrtano: {
    textDecorationLine: 'line-through',
    color: barve.besediloSekundarno,
  },
  cas: {
    fontSize: pisava.majhno,
    color: barve.besediloSekundarno,
    marginTop: razmiki.xs,
  },
  odstrani: {
    fontSize: pisava.majhno,
    color: barve.opozorilo,
    fontWeight: '600',
  },
});
