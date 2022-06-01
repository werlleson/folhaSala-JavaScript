qh = float(input('digite quanto você recebe por hora: '))
hm = float(input('digite quantas horas você faz no mês: '))
sa = qh * hm

if sa < 900:
    print('insento dos descontos')


elif sa <= 1500:
    ir = (sa * 5 / 100)
    si = (sa * 3 / 100)
    fgts = (sa * 11 / 100)
    s1 = sa - (ir + si )
    print('-------------------------------------------')
    print('\n Salário bruto:                    R${:.2f}'
          '\n (-) Imposto de renda (5%):        R${:.2f}'
          '\n (-) Sindicato (3%):               R${:.2f}'
          '\n (-) FGTS (11%):                   R${:.2f}'
          '\n Salário Liquido:                  R${:.2f}'

          .format(sa, ir, si, fgts,s1 ))
elif sa <= 2500:
    ir = (sa * 10 / 100)
    si = (sa * 3 / 100)
    fgts = (sa * 11 / 100)
    s1 = sa - (ir + si)
    print('-------------------------------------------')
    print('\n Salário bruto:                    R${:.2f}'
          '\n (-) Imposto de renda (10%):       R${:.2f}'
          '\n (-) Sindicato (3%):               R${:.2f}'
          '\n (-) FGTS (11%):                   R${:.2f}'
          '\n Salário Liquido:                  R${:.2f}'
          .format(sa, ir, si, fgts, s1))
elif sa > 2500:
    ir = (sa * 20 / 100)
    si = (sa * 3 / 100)
    fgts = (sa * 11 / 100)
    s1 = sa - (ir + si)
    print('-------------------------------------------')
    print('\n Salário bruto:                    R${:.2f}'
          '\n (-) Imposto de renda (20%):       R${:.2f}'
          '\n (-) Sindicato (3%):               R${:.2f}'
          '\n (-) FGTS (11%):                   R${:.2f}'
          '\n Salário Liquido:                  R${:.2f}'
          .format(sa, ir, si, fgts, s1))



    